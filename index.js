const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const users = [
  { id: 1, name: "Ahmad", email: "Ahmad@gmail.com" },
  { id: 2, name: "Rayan", email: "Rayan@gmail.com" },
  { id: 3, name: "Ayesha", email: "Ayesha@gmail.com" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const { name, email } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: "name and email are required" });
  }

  const user = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(user);
  res.status(201).json(user);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
