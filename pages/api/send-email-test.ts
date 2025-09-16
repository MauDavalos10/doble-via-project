import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email requerido" });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log("Probando envío de email a:", email);

    // Email de prueba simple
    const testEmail = await resend.emails.send({
      from: "DobleVia <onboarding@resend.dev>",
      to: [email],
      subject: "Prueba de email - DobleVia",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c00b19;">Prueba de Email</h2>
          <p>Este es un email de prueba para verificar que el sistema funciona correctamente.</p>
          <p>Si recibes este email, significa que el sistema está funcionando.</p>
          <p>Fecha: ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    console.log("Email de prueba enviado:", testEmail.data?.id);

    res.status(200).json({
      message: "Email de prueba enviado exitosamente",
      emailId: testEmail.data?.id,
      emailAddress: email,
    });
  } catch (error) {
    console.error("Error sending test email:", error);
    res.status(500).json({
      message: "Error al enviar email de prueba",
      error: error instanceof Error ? error.message : "Error desconocido",
    });
  }
}
