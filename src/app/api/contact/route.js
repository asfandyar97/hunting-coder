import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "contacts.json");

// ✅ POST request -> Save data
export async function POST(req) {
  try {
    const body = await req.json();

    // Pehle file ka data read karo
    const fileData = fs.readFileSync(filePath, "utf-8");
    const contacts = JSON.parse(fileData);

    // Naya data add karo
    contacts.push({
      ...body,
      createdAt: new Date().toISOString(),
    });

    // File me save karo
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));

    return Response.json({ message: "✅ Data saved in file!", data: body });
  } catch (error) {
    return Response.json({ message: "❌ Error saving data", error: error.message });
  }
}

// ✅ GET request -> Read all data
export async function GET() {
  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    const contacts = JSON.parse(fileData);

    return Response.json({ contacts });
  } catch (error) {
    return Response.json({ message: "❌ Error reading data", error: error.message });
  }
}
