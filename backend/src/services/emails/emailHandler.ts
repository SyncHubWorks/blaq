import { resendClient, sender } from "../../lib/resend";
import {
  createResetEmailTemplate,
  createWelcomeEmailTemplate,
} from "./emailTemplates";

export async function sendWelcomeEmail(
  email: string,
  name: string,
  clientUrl: string,
) {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Welcome to Student Markert!",
    html: createWelcomeEmailTemplate(name, clientUrl),
  });

  if (error) {
    return console.error("Error sending an email", error);
  }

  console.log("Email sent successfully", data);
}

export async function sendResetEmail(
  email: string,
  name: string,
  resetUrl: string,
) {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Reset your student Markert password",
    html: createResetEmailTemplate(name, resetUrl),
  });

  if (error) {
    return console.error("Error sending reset email", error);
  }

  console.log("Reset email sent successfully", data);
}
