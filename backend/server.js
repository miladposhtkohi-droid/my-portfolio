import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import process from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the built React app
app.use(express.static(path.join(__dirname, "../dist")));

// File-based data storage
const dataDir = path.join(__dirname, "../data");
const contactFile = path.join(dataDir, "contacts.json");

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize contacts file if it doesn't exist
if (!fs.existsSync(contactFile)) {
  fs.writeFileSync(contactFile, JSON.stringify([]));
}

// API Routes
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend & Database combined container running",
  });
});

// Contact route (post) - saves to file instead of database
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Read existing contacts
    let contacts = JSON.parse(fs.readFileSync(contactFile, "utf8"));

    // Add new contact
    const newContact = {
      id: Date.now(),
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    };

    contacts.push(newContact);

    // Save back to file
    fs.writeFileSync(contactFile, JSON.stringify(contacts, null, 2));

    console.log("Contact saved to file:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ success: false, message: "Failed to save message" });
  }
});

// Get all contacts (admin endpoint)
app.get("/api/contacts", (req, res) => {
  try {
    const contacts = JSON.parse(fs.readFileSync(contactFile, "utf8"));
    res.json(contacts);
  } catch (error) {
    console.error("Error retrieving contacts:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve contacts" });
  }
});

// Serve React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    `Combined Backend & Database container running on http://localhost:${port}`,
  );
  console.log(`Data storage: ${dataDir}`);
});
