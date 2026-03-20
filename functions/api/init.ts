import { neon } from "@neondatabase/serverless";

export const onRequestGet = async (context) => {
  const { env } = context;
  const databaseUrl = env.DATABASE_URL;

  if (!databaseUrl) {
    return new Response(JSON.stringify({ status: "error", message: "DATABASE_URL is missing in environment variables." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const sql = neon(databaseUrl);
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
    return new Response(JSON.stringify({ status: "ok", message: "Database table 'testimonials' checked/created successfully." }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("FAILED to initialize database:", error.message);
    return new Response(JSON.stringify({ status: "error", message: "FAILED to initialize database.", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
