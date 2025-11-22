const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config({ path: '.env.local' });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    // There isn't a direct listModels on the instance in some versions, 
    // but let's try to just run a simple prompt on a few candidates.
    
    const candidates = [
      "gemini-1.5-flash",
      "gemini-1.5-flash-001",
      "gemini-1.5-pro",
      "gemini-pro",
      "gemini-1.0-pro"
    ];

    for (const modelName of candidates) {
      console.log(`Testing ${modelName}...`);
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent("Hello");
        console.log(`SUCCESS: ${modelName}`);
        console.log(result.response.text());
        return; // Found one
      } catch (e) {
        console.log(`FAILED: ${modelName} - ${e.message}`);
      }
    }
  } catch (e) {
    console.error(e);
  }
}

listModels();
