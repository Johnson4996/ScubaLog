const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Load the database (db.json)
const dbFilePath = path.join(__dirname, "db.json");
let database = JSON.parse(fs.readFileSync(dbFilePath, "utf8"));

// Utility function to save the database
const saveDatabase = () => {
  fs.writeFileSync(dbFilePath, JSON.stringify(database, null, 2));
};

// Routes
app.get("/api/users", (req, res) => {
  res.json(database.users);
});

app.post("/api/users", (req, res) => {
  const newUser = req.body;
  newUser.id = database.users.length ? database.users[database.users.length - 1].id + 1 : 1;
  database.users.push(newUser);
  saveDatabase();
  res.status(201).json(newUser);
});

// Add more routes as needed


app.use(express.static(path.join(__dirname, "build")));


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
