import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Route for contact form
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Tous les champs sont requis." });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_SMTP_USER = process.env.BREVO_SMTP_USER; // Not strictly needed for API but user mentioned it

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
