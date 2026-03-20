import { neon } from "@neondatabase/serverless";

export const onRequest = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);

  if (!env.DATABASE_URL) {
    console.error("DATABASE_URL is not set in environment variables.");
    return new Response(JSON.stringify({ error: "Configuration error: DATABASE_URL is missing." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const sql = neon(env.DATABASE_URL);

  // GET /api/testimonials
  if (request.method === "GET") {
    try {
      console.log("Fetching testimonials from database...");
      const testimonials = await sql`SELECT * FROM testimonials ORDER BY created_at DESC`;
      console.log(`Successfully fetched ${testimonials.length} testimonials.`);
      return new Response(JSON.stringify(testimonials), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error: any) {
      console.error("Error in testimonials GET:", error);
      return new Response(JSON.stringify({ error: "Erreur lors de la récupération des témoignages.", details: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  // POST /api/testimonials
  if (request.method === "POST") {
    try {
      const body: any = await request.json();
      const { name, role, content, rating } = body;

      console.log("Adding new testimonial:", { name, role, rating });

      if (!name || !content) {
        return new Response(JSON.stringify({ error: "Le nom et le contenu sont requis." }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const result = await sql`
        INSERT INTO testimonials (name, role, content, rating) 
        VALUES (${name}, ${role || ""}, ${content}, ${rating || 5}) 
        RETURNING *
      `;
      
      console.log("Successfully added testimonial.");
      return new Response(JSON.stringify(result[0]), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error: any) {
      console.error("Error in testimonials POST:", error);
      return new Response(JSON.stringify({ error: "Erreur lors de l'enregistrement du témoignage.", details: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  return new Response("Method not allowed", { status: 405 });
};
