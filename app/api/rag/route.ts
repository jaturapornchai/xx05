import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import dbConnect from '@/lib/mongoose';
import Product from '@/models/Product';

export async function POST(req: Request) {
  try {
    // Initialize OpenAI inside the handler to avoid build-time errors if env var is missing
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { query } = await req.json();

    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    // 1. Connect to Database
    await dbConnect();

    // 2. Generate Embedding for the query
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: query,
      encoding_format: 'float',
    });

    const queryVector = embeddingResponse.data[0].embedding;

    // 3. Perform Vector Search in MongoDB
    // Note: You must create a Vector Search Index in MongoDB Atlas for this to work.
    // Index definition example:
    // {
    //   "fields": [
    //     {
    //       "numDimensions": 1536,
    //       "path": "embedding",
    //       "similarity": "cosine",
    //       "type": "vector"
    //     }
    //   ]
    // }
    
    const products = await Product.aggregate([
      {
        $vectorSearch: {
          index: "vector_index", // Ensure this matches your Atlas Vector Search Index name
          path: "embedding",
          queryVector: queryVector,
          numCandidates: 100,
          limit: 5,
        },
      },
      {
        $project: {
          _id: 0,
          title: 1,
          description: 1,
          score: { $meta: "vectorSearchScore" }
        }
      }
    ]);

    // 4. Construct Prompt for LLM
    const context = products.map(p => `Title: ${p.title}\nDescription: ${p.description}`).join('\n\n');
    
    const systemPrompt = `You are a helpful assistant. Use the following context to answer the user's question.
If the answer is not in the context, say you don't know.

Context:
${context}`;

    // 5. Generate Answer
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o', // or gpt-3.5-turbo
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: query }
      ],
    });

    const answer = completion.choices[0].message.content;

    return NextResponse.json({
      answer,
      context: products // Optional: return context for debugging or UI
    });

  } catch (error: any) {
    console.error('RAG Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
