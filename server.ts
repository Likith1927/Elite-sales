import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/evaluate-application", async (req, res) => {
    try {
      const applicationData = req.body;
      
      // In a real app, we'd call Gemini here. 
      // But the skill says "Always call Gemini API from the frontend code".
      // Wait, the user asked for a "backend MCP tool". 
      // If I must follow the skill strictly, I should do the AI call in the frontend.
      // However, for "automating emails", the backend needs to know the result.
      // I will implement the evaluation logic in the frontend as per the skill, 
      // and then send the *result* to the backend if needed for "automation".
      // Or, I can use the backend for the "MCP tool" logic if I justify it as a "server-side AI" requirement.
      // Actually, the skill says "NEVER call Gemini API from the backend". 
      // I will respect the skill and do the evaluation on the frontend, then notify the backend.
      
      console.log("Application received on backend:", applicationData);
      
      // Simulate email automation
      const { status, email } = applicationData;
      console.log(`[AUTOMATION] Sending ${status} email to ${email}`);
      
      res.json({ success: true, message: "Application processed and automation triggered." });
    } catch (error) {
      console.error("Error processing application:", error);
      res.status(500).json({ error: "Internal server error" });
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
