let contacts = []; // memory me hi save hoga, har deploy ke restart pe reset hoga

export async function POST(req) {
  try {
    const body = await req.json();
    contacts.push(body);

    return Response.json({ message: "✅ Saved successfully!", data: body });
  } catch (error) {
    return Response.json({ message: "❌ Failed to save", error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ contacts });
}
