import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "../shared/schema";


export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      const contact = await storage.createContactSubmission(validatedData);
      
      res.status(201).json({
        message: "Contact form submitted successfully",
        id: contact.id
      });
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      res.status(400).json({ 
        message: "Failed to submit contact form", 
        error: error.message 
      });
    }
  });

  // Get all contact submissions (could be used for an admin dashboard)
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.status(200).json(submissions);
    } catch (error: any) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        message: "Failed to fetch contact submissions", 
        error: error.message 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
