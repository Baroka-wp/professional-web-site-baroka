import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import { neon } from "@neondatabase/serverless";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize Neon database
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("CRITICAL: DATABASE_URL environment variable is missing!");
} else {
  console.log("DATABASE_URL is present. Attempting to connect to Neon...");
}

const sql = databaseUrl ? neon(databaseUrl) : null;

// Create testimonials table if it doesn't exist
const initDb = async () => {
  if (sql) {
    try {
      console.log("Initializing database table...");
      await sql`
        CREATE TABLE IF NOT EXISTS testimonials (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          role TEXT,
          content TEXT NOT NULL,
          rating INTEGER DEFAULT 5,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `;
      console.log("Database table 'testimonials' checked/created successfully.");
    } catch (error) {
      console.error("FAILED to initialize database:", error);
    }
  }
};

initDb();

async function startServer() {
  const app = express();
  const PORT = 5002;

  app.use(cors());
  app.use(express.json());

  // Database Health Check
  app.get("/api/db-health", async (req, res) => {
    if (!sql) {
      return res.status(500).json({
        status: "error",
        message: "DATABASE_URL is missing in environment variables."
      });
    }
    try {
      await sql`SELECT 1`;
      res.json({ status: "ok", message: "Connected to Neon successfully." });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: "Failed to connect to Neon.",
        details: error.message
      });
    }
  });

  // API Route for contact form
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Tous les champs sont requis." });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;

    if (!BREVO_API_KEY) {
      console.error("BREVO_API_KEY is missing");
      return res.status(500).json({ error: "Erreur de configuration du serveur." });
    }

    try {
      await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
          sender: { name: "Portfolio Contact", email: "noreply@irotoribaroka.com" },
          to: [{ email: "birotori@gmail.com", name: "Irotori Baroka" }],
          replyTo: { email, name },
          subject: `Nouveau message de ${name} via Portfolio`,
          htmlContent: `
            <h3>Nouveau message de contact</h3>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Message :</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        },
        {
          headers: {
            "api-key": BREVO_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      res.status(200).json({ success: true });
    } catch (error: any) {
      console.error("Error sending email via Brevo:", error.response?.data || error.message);
      res.status(500).json({ error: "Une erreur est survenue lors de l'envoi du message." });
    }
  });

  // API Routes for Testimonials
  app.get("/api/testimonials", async (req, res) => {
    if (!sql) {
      return res.status(500).json({ error: "Database not configured." });
    }
    try {
      const testimonials = await sql`SELECT * FROM testimonials ORDER BY created_at DESC`;
      res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ error: "Erreur lors de la récupération des témoignages." });
    }
  });

  app.post("/api/testimonials", async (req, res) => {
    if (!sql) {
      return res.status(500).json({ error: "Database not configured." });
    }
    const { name, role, content, rating } = req.body;

    if (!name || !content) {
      return res.status(400).json({ error: "Le nom et le contenu sont requis." });
    }

    try {
      const result = await sql`
        INSERT INTO testimonials (name, role, content, rating) 
        VALUES (${name}, ${role || ""}, ${content}, ${rating || 5}) 
        RETURNING *
      `;

      res.status(201).json(result[0]);
    } catch (error) {
      console.error("Error saving testimonial:", error);
      res.status(500).json({ error: "Erreur lors de l'enregistrement du témoignage." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
