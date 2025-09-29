// src/app/api/contact/route.js
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "contacts.json");

export async function POST(req) {
  try {
    const body = await req.json();

    // Read existing data
    let contacts = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf8");
      contacts = fileData ? JSON.parse(fileData) : [];
    }

    // Append new data
    contacts.push({ ...body, date: new Date().toISOString() });

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));

    return Response.json({ message: "✅ Data saved successfully" });
  } catch (error) {
    return Response.json({ message: "❌ Error saving data", error: error.message });
  }
}
