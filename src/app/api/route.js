import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "contacts.json");

export async function POST(req) {
  const body = await req.json();
  let contacts = [];

  try {
    const fileData = fs.readFileSync(filePath, "utf-8");
    contacts = JSON.parse(fileData);
  } catch (err) {
    contacts = [];
  }

  contacts.push(body);
  fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));

  return Response.json({ message: "✅ Saved successfully!" });
}

// ❌ GET ko hata do ya error return karo
export async function GET() {
  return Response.json({ error: "GET not allowed ❌" }, { status: 405 });
}
