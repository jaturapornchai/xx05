
import { mongoUpdate } from "./lib/mongodb";

async function seedData() {
  try {
    console.log("Seeding members...");
    const result = await mongoUpdate("members", { id: "0001" }, {
      id: "0001",
      name: "นายสมชาย ใจดี",
      citizen_id: "5-1012-34567-89-0",
      phone: "081-234-5678",
      shares: 50000,
      deposits: 125000,
      loans: 150000,
      status: "active"
    });
    console.log("Seed result:", result);
  } catch (error) {
    console.error("Error seeding:", error);
  }
}

seedData();
