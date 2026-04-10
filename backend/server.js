import express from 'express';
import cors from 'cors';



const app = express();



// Middleware
app.use(cors());
app.use(express.json()); 


// Routes
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Kontact route (post)
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Meddelande från kontaktformulär:");
  console.log("Namn:", name);
  console.log("Email:", email);
  console.log("Meddelande:", message);

  // Här kan du senare lägga till Nodemailer för att skicka mail

  res.json({ success: true, message: "Meddelandet mottaget!" });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});