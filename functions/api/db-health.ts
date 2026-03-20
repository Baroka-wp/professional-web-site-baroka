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
    await sql`SELECT 1`;
    return new Response(JSON.stringify({ status: "ok", message: "Connected to Neon successfully." }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Failed to connect to Neon:", error.message);
    return new Response(JSON.stringify({ status: "error", message: "Failed to connect to Neon.", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
