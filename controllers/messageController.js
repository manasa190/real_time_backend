let messages = []; // Temporary storage (or use a database later)

export const getMessage = (req, res) => {
  res.json({ message: "🚀 Welcome to the API!" });
};

export const sendMessage = (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }
  messages.push({ name, email, message, date: new Date() });
  res.json({ success: true, message: "📩 Message received!" });
};
