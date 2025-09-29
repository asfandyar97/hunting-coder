// src/app/api/contact/route.js

export async function GET() {
  return Response.json({ message: "Contact API is working ✅" });
}

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received data:", body);

    return Response.json({
      message: "Form submitted successfully!",
      data: body,
    });
  } catch (error) {
    return Response.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
}
