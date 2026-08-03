const escapeHTML = (str: string) =>
  str.replace(/[&<>"']/g, (m) => {
    if (m === "&") return "&amp;";
    if (m === "<") return "&lt;";
    if (m === ">") return "&gt;";
    if (m === '"') return "&quot;";
    if (m === "'") return "&#039;";
    return m;
  });

// ---------- WELCOME EMAIL ----------
export const createWelcomeEmailTemplate = (name: string, clientUrl: string) => {
  const safeName = escapeHTML(name || "there");

  return `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <title>Welcome to Campus Marketplace</title>
</head>

<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f8fafc">
<tr>
<td align="center" style="padding:40px 16px;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">

<!-- Logo -->
<tr>
<td align="center" style="padding-bottom:32px;">
<span style="font-size:28px;font-weight:700;color:#2563eb;">
🛍️ Campus Marketplace
</span>
</td>
</tr>

<!-- Card -->
<tr>
<td bgcolor="#ffffff" style="background:#ffffff;border-radius:14px;padding:40px;box-shadow:0 2px 12px rgba(0,0,0,.06);">

<h1 style="margin:0 0 12px;text-align:center;font-size:28px;color:#0f172a;">
Welcome, ${safeName}! 👋
</h1>

<p style="margin:0 0 28px;text-align:center;font-size:16px;line-height:1.7;color:#475569;">
Your account has been created successfully.
Join thousands of students buying and selling safely within their campus community.
</p>

<table width="100%" cellpadding="0" cellspacing="0">

<tr>
<td style="padding-bottom:18px;">
<table width="100%">
<tr>
<td width="34" style="font-size:20px;">🛒</td>
<td style="font-size:15px;color:#334155;">
Browse affordable products from fellow students.
</td>
</tr>
</table>
</td>
</tr>

<tr>
<td style="padding-bottom:18px;">
<table width="100%">
<tr>
<td width="34" style="font-size:20px;">📦</td>
<td style="font-size:15px;color:#334155;">
Sell textbooks, electronics, furniture, clothing and more.
</td>
</tr>
</table>
</td>
</tr>

<tr>
<td style="padding-bottom:18px;">
<table width="100%">
<tr>
<td width="34" style="font-size:20px;">💳</td>
<td style="font-size:15px;color:#334155;">
Secure payments powered by Paystack.
</td>
</tr>
</table>
</td>
</tr>

<tr>
<td>
<table width="100%">
<tr>
<td width="34" style="font-size:20px;">🚚</td>
<td style="font-size:15px;color:#334155;">
Track orders and upload shipment proof after sending items.
</td>
</tr>
</table>
</td>
</tr>

</table>

<table width="100%" cellpadding="0" cellspacing="0" style="margin-top:36px;">
<tr>
<td align="center">

<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
href="${clientUrl}"
style="height:48px;v-text-anchor:middle;width:220px;"
arcsize="10%"
fillcolor="#2563eb"
strokecolor="#2563eb">
<w:anchorlock/>
<center style="color:#ffffff;font-size:16px;font-family:Arial;font-weight:bold;">
Start Shopping
</center>
</v:roundrect>
<![endif]-->

<a href="${clientUrl}"
target="_blank"
style="
display:inline-block;
background:#2563eb;
color:#ffffff;
text-decoration:none;
padding:14px 34px;
border-radius:8px;
font-size:16px;
font-weight:600;
font-family:Arial,sans-serif;">
Start Shopping
</a>

</td>
</tr>
</table>

</td>
</tr>

<!-- Footer -->

<tr>
<td align="center"
style="padding:24px 40px;color:#94a3b8;font-size:13px;line-height:1.7;">

<p style="margin:0 0 8px;">
© ${new Date().getFullYear()} Campus Marketplace. All rights reserved.
</p>

<p style="margin:0;">
You received this email because you created an account on Campus Marketplace.
If this wasn't you, you can safely ignore this email.
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
};

// ---------- PASSWORD RESET EMAIL ----------
export const createResetEmailTemplate = (name: string, resetUrl: string) => {
  const safeName = escapeHTML(name || "there");

  return `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <title>Reset Your Password</title>
</head>

<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f8fafc">
<tr>
<td align="center" style="padding:40px 16px;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">

<!-- Logo -->

<tr>
<td align="center" style="padding-bottom:32px;">
<span style="font-size:28px;font-weight:700;color:#2563eb;">
🛍️ Campus Marketplace
</span>
</td>
</tr>

<!-- Card -->

<tr>
<td bgcolor="#ffffff" style="background:#ffffff;border-radius:14px;padding:40px;box-shadow:0 2px 12px rgba(0,0,0,.06);">

<h1 style="margin:0 0 12px;text-align:center;font-size:28px;color:#0f172a;">
Reset Your Password
</h1>

<p style="margin:0 0 24px;text-align:center;font-size:16px;line-height:1.7;color:#475569;">
Hi <strong>${safeName}</strong>,
</p>

<p style="margin:0 0 32px;text-align:center;font-size:16px;line-height:1.7;color:#475569;">
We received a request to reset the password for your Campus Marketplace account.
Click the button below to create a new password.
</p>

<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center">

<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
href="${resetUrl}"
style="height:48px;v-text-anchor:middle;width:220px;"
arcsize="10%"
fillcolor="#2563eb"
strokecolor="#2563eb">
<w:anchorlock/>
<center style="color:#ffffff;font-size:16px;font-family:Arial;font-weight:bold;">
Reset Password
</center>
</v:roundrect>
<![endif]-->

<a
href="${resetUrl}"
target="_blank"
style="
display:inline-block;
background:#2563eb;
color:#ffffff;
text-decoration:none;
padding:14px 34px;
border-radius:8px;
font-size:16px;
font-weight:600;
font-family:Arial,sans-serif;
">
Reset Password
</a>

</td>
</tr>
</table>

<p style="margin:32px 0 12px;text-align:center;font-size:14px;color:#64748b;line-height:1.6;">
⏳ This password reset link will expire in
<strong>15 minutes</strong>.
</p>

<p style="margin:0;text-align:center;font-size:14px;color:#64748b;line-height:1.6;">
If you didn't request a password reset, you can safely ignore this email.
Your password will remain unchanged.
</p>

</td>
</tr>

<!-- Footer -->

<tr>
<td align="center"
style="padding:24px 40px;color:#94a3b8;font-size:13px;line-height:1.7;">

<p style="margin:0 0 8px;">
© ${new Date().getFullYear()} Campus Marketplace. All rights reserved.
</p>

<p style="margin:0;">
Need help? Simply reply to this email and our support team will gladly assist you.
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
};
