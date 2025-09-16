import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import nodemailer from "nodemailer";

type EmailData = {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  contactPreference: string;
};

// Función para validar email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const {
      fullName,
      phone,
      email,
      serviceType,
      contactPreference,
    }: EmailData = req.body;

    // Validar campos requeridos
    if (!fullName || !phone || !email || !serviceType || !contactPreference) {
      return res
        .status(400)
        .json({ message: "Todos los campos son requeridos" });
    }

    // Validar formato de email
    if (!isValidEmail(email)) {
      return res
        .status(400)
        .json({ message: "El formato del email no es válido" });
    }

    const ownerEmail = process.env.OWNER_EMAIL || "andresjacomeliga@gmail.com";

    console.log("Enviando emails con respaldo...");
    console.log("Email del cliente:", email);
    console.log("Email del owner:", ownerEmail);
    console.log("¿Son diferentes los emails?", email !== ownerEmail);

    let ownerEmailId = null;
    let clientEmailId = null;
    let clientEmailError = null;

    // Email al owner usando Resend
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);

      const ownerEmailResult = await resend.emails.send({
        from: "DobleVia <noreply@fsdalfajsdlkfsajdlkafsdjlkfsadkljfasjfadslfjaskldfkasd.lat>",
        to: [ownerEmail],
        subject: "Nueva solicitud de servicio - DobleVia",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #c00b19;">Nueva Solicitud de Servicio</h2>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>De:</strong> ${fullName} (${email})</p>
              <p><strong>Celular:</strong> ${phone}</p>
              <p><strong>Tipo de servicio:</strong> ${serviceType}</p>
              <p><strong>Preferencia de contacto:</strong> ${contactPreference}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">
              Este mensaje ha sido enviado desde un formulario en DobleVia (https://doblevia.org)
            </p>
          </div>
        `,
      });

      ownerEmailId = ownerEmailResult.data?.id;
      console.log("Email al owner enviado (Resend):", ownerEmailId);
    } catch (error) {
      console.error("Error enviando email al owner:", error);
    }

    // Email al cliente usando Gmail SMTP como respaldo (solo si es diferente al owner)
    if (email !== ownerEmail) {
      // Verificar si las credenciales de Gmail están configuradas
      if (
        !process.env.EMAIL_USER ||
        !process.env.EMAIL_PASSWORD ||
        process.env.EMAIL_PASSWORD === "your-app-password"
      ) {
        console.log(
          "⚠️ Gmail SMTP no configurado, solo se envía email al owner"
        );
        clientEmailError =
          "Gmail SMTP no configurado. Solo se envió email al owner.";
      } else {
        try {
          // Configurar Gmail SMTP
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASSWORD,
            },
          });

          const clientEmail = await transporter.sendMail({
            from: "DobleVia <andresjacomeliga@gmail.com>",
            to: email,
            subject: "Gracias por contactarnos - DobleVia",
            html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 30px;">
              <img src="https://via.placeholder.com/200x80/c00b19/ffffff?text=DobleVia+Logo" 
                   alt="DobleVia Logo" 
                   style="max-width: 200px; height: auto;">
              <h1 style="color: #c00b19; margin: 10px 0; font-weight: bold;">Transportamos vidas</h1>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 30px; border-radius: 8px;">
              <h2 style="color: #333; margin-bottom: 20px;">Estimado/a ${fullName},</h2>
              
              <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
                Gracias por contactarnos. Hemos recibido su solicitud de información sobre nuestros servicios de transporte.
              </p>
              
              <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
                Nuestro equipo de atención al cliente se pondrá en contacto con usted en un tiempo máximo de 12 horas para brindarle toda la información que necesita sobre el servicio de <strong>${serviceType}</strong>.
              </p>
              
              <p style="color: #555; line-height: 1.6;">
                Si tiene alguna pregunta urgente, no dude en contactarnos directamente al +593 98 706 3904.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #c00b19; color: white; border-radius: 8px;">
              <p style="margin: 0; font-weight: bold;">DobleVia Transport</p>
              <p style="margin: 5px 0 0 0; font-size: 14px;">Su seguridad y comodidad son nuestra prioridad</p>
            </div>
          </div>
        `,
          });

          clientEmailId = clientEmail.messageId;
          console.log("Email al cliente enviado (Gmail):", clientEmailId);
        } catch (error) {
          console.error("Error enviando email al cliente:", error);
          clientEmailError =
            error instanceof Error ? error.message : "Error desconocido";
        }
      }
    } else {
      console.log(
        "El email del cliente es igual al del owner, no se envía email duplicado"
      );
    }

    // Determinar el mensaje de respuesta
    let message = "Emails enviados exitosamente";
    if (!ownerEmailId && !clientEmailId) {
      message = "Error al enviar ambos emails";
    } else if (!ownerEmailId) {
      message =
        "Email al cliente enviado, pero hubo un problema con el email al owner";
    } else if (!clientEmailId && email !== ownerEmail) {
      if (
        clientEmailError &&
        clientEmailError.includes("Gmail SMTP no configurado")
      ) {
        message =
          "Email al owner enviado exitosamente. Te contactaremos pronto.";
      } else {
        message =
          "Email al owner enviado exitosamente. Te contactaremos pronto.";
      }
    } else if (email === ownerEmail) {
      message = "Email al owner enviado exitosamente. Te contactaremos pronto.";
    }

    res.status(200).json({
      message,
      ownerEmailId,
      clientEmailId,
      clientEmailAddress: email,
      clientEmailError,
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({
      message: "Error al enviar los emails",
      error: error instanceof Error ? error.message : "Error desconocido",
    });
  }
}
