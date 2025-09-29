export async function POST(req) {
  try {
    const body = await req.json(); // form data as JSON
    console.log("Form Data:", body);

    // yahan database me save karo ya email bhejo
    return Response.json({ success: true, message: "Form submitted successfully 🚀" });
  } catch (error) {
    return Response.json({ success: false, message: "Error submitting form" }, { status: 500 });
  }
}
