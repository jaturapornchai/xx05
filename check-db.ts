
import { mongoGet } from "./lib/mongodb";

async function checkData() {
  try {
    console.log("Checking members collection...");
    const members = await mongoGet("members", {}, { limit: 5 });
    console.log("Members found:", JSON.stringify(members, null, 2));
  } catch (error) {
    console.error("Error fetching members:", error);
  }
}

checkData();
