export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body; // <-- yaha direct req.body use karo

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  return res.status(200).json({
    message: "✅ Data received successfully!",
    data: { name, email, message },
  });
}
