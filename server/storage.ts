// storage.ts
import { db } from "./db";
import { contactSubmissions } from "../shared/schema"; // or "@shared/schema" if using alias
import type { InsertContact } from "../shared/schema";

export const storage = {
  createContactSubmission: async (data: InsertContact) => {
    const [submission] = await db.insert(contactSubmissions).values({
      ...data,
      createdAt: new Date().toISOString(),
    }).returning();
    return submission;
  },

  getContactSubmissions: async () => {
    return await db.select().from(contactSubmissions);
  },
};
