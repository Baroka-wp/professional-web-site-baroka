import { neon } from "@neondatabase/serverless";

export const onRequest = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const sql = neon(env.DATABASE_URL);

  // GET /api/testimonials
  if (request.method === "GET") {
    try {
      const testimonials = await sql`SELECT * FROM testimonials ORDER BY created_at DESC`;
      return new Response(JSON.stringify(testimonials), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error: any) {
      console.error("Error fetching testimonials:", error);
      return new Response(JSON.stringify({ error: "Erreur lors de la récupération des témoignages.", details: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  // POST /api/testimonials
  if (request.method === "POST") {
    try {
      const { name, role, content, rating } = await request.json();

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
      
      return new Response(JSON.stringify(result[0]), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error: any) {
      console.error("Error saving testimonial:", error);
      return new Response(JSON.stringify({ error: "Erreur lors de l'enregistrement du témoignage.", details: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  return new Response("Method not allowed", { status: 405 });
};
