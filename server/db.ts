import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from 'ws';
import 'dotenv/config';
import * as schema from '../shared/schema';




// Required for Neon serverless to use WebSocket
neonConfig.webSocketConstructor = ws;

// Validate env
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL must be set in .env');
}

// Create Neon-compatible pool
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Export Drizzle DB instance
export const db = drizzle(pool, { schema });
