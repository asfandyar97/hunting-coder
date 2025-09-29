export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // POST request handle karo
  const { name, email, message } = req.body;

  // Future me yaha database/email ka logic add kar sakte ho
  res.status(200).json({
    message: "Data received successfully ✅",
    data: { name, email, message },
  });
}
