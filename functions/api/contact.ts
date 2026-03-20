export const onRequestPost = async (context) => {
  const { request, env } = context;
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Tous les champs sont requis." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const BREVO_API_KEY = env.BREVO_API_KEY;

  if (!BREVO_API_KEY) {
    console.error("BREVO_API_KEY is missing");
    return new Response(JSON.stringify({ error: "Erreur de configuration du serveur." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(JSON.stringify(errorData));
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error sending email via Brevo:", error.message);
    return new Response(JSON.stringify({ error: "Une erreur est survenue lors de l'envoi du message.", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
