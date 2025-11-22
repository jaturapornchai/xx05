import { GoogleGenerativeAI } from "@google/generative-ai";
import { mongoGet } from "@/lib/mongodb";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `
You are an intelligent assistant for a Cooperative Management System (SAP ERP Style).
You have access to a MongoDB database with the following collections:
- 'members': Member information (name, id, status, etc.)
- 'deposits': Deposit accounts and transactions.
- 'loans': Loan contracts and status.
- 'products': Product inventory and details.
- 'cooperatives': Cooperative details.

Your goal is to help users find information.
When a user asks a question that requires data, you should generate a MongoDB query.
Return your response in strictly valid JSON format.

If you need to query data, return:
{
  "type": "query",
  "collection": "collection_name",
  "filter": { "field": "value" },
  "explanation": "I will look up..."
}

If you can answer directly or need more info, return:
{
  "type": "chat",
  "message": "Your response here..."
}

Examples:
User: "Find member with name Somchai"
Response: { "type": "query", "collection": "members", "filter": { "name": { "$regex": "Somchai", "$options": "i" } }, "explanation": "Searching for members named Somchai..." }

User: "Show me active loans"
Response: { "type": "query", "collection": "loans", "filter": { "status": "active" }, "explanation": "Fetching active loans..." }

User: "Hello"
Response: { "type": "chat", "message": "Hello! How can I help you with the Cooperative System today?" }
`;

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }],
        },
        {
          role: "model",
          parts: [{ text: "Understood. I am ready to assist with the Cooperative Management System." }],
        },
        ...history.map((msg: any) => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }],
        })),
      ],
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    // Try to parse JSON
    let parsedResponse;
    try {
      // Clean up markdown code blocks if present
      const cleanJson = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
      parsedResponse = JSON.parse(cleanJson);
    } catch (e) {
      // If not JSON, treat as chat
      return NextResponse.json({ role: "assistant", content: responseText });
    }

    if (parsedResponse.type === "query") {
      try {
        // Execute MongoDB Query
        const data = await mongoGet(parsedResponse.collection, parsedResponse.filter, { limit: 5 });
        
        // Feed data back to Gemini
        const dataResult = await chat.sendMessage(`
          Here is the data from MongoDB:
          ${JSON.stringify(data)}
          
          Please summarize this for the user in a helpful way.
        `);

        return NextResponse.json({ role: "assistant", content: dataResult.response.text() });
      } catch (error) {
        return NextResponse.json({ role: "assistant", content: "Sorry, I encountered an error while fetching data from the database." });
      }
    } else {
      return NextResponse.json({ role: "assistant", content: parsedResponse.message });
    }

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
