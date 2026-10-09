import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Vérification des variables d'environnement
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey) {
      console.error("❌ RESEND_API_KEY manquante dans .env.local");
      return NextResponse.json(
        { error: "Configuration serveur invalide (clé API manquante)." },
        { status: 500 }
      );
    }

    if (!contactEmail) {
      console.error("❌ CONTACT_EMAIL manquant dans .env.local");
      return NextResponse.json(
        { error: "Configuration serveur invalide (email destinataire manquant)." },
        { status: 500 }
      );
    }

    // Initialisation de Resend APRÈS avoir vérifié la clé
    const resend = new Resend(apiKey);

    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis." },
        { status: 400 }
      );
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    console.log("📧 Tentative d'envoi à:", contactEmail);
    console.log("📧 Depuis:", email, "| Nom:", name);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: email,
      subject: subject || `Nouveau message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message depuis ton portfolio</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Sujet :</strong> ${subject || "Non spécifié"}</p>
          <hr style="border: 1px solid #eee;" />
          <h3 style="color: #333;">Message :</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Erreur Resend détaillée:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: error.message || "Erreur lors de l'envoi du message." },
        { status: 500 }
      );
    }

    console.log("✅ Email envoyé avec succès, ID:", data?.id);

    return NextResponse.json(
      { message: "Message envoyé avec succès !", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Erreur serveur complète:", error);
    const message =
      error instanceof Error ? error.message : "Une erreur interne est survenue.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}