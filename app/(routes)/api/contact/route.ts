import { NextRequest, NextResponse } from "next/server";
import { mailOptions, transporter } from "@/config/nodemailer";

const CONTACT_MESSAGE_FIELDS: { [key: string]: string } = {
  name: "Full Name",
  email: "Email",
  subject:"Subject",
  message: "Message",
};

const generateEmailContent = (data: any) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val}\n\n`),
    ""
  );

  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `<tr><td><strong>${CONTACT_MESSAGE_FIELDS[key]}:</strong></td><td>${val}</td></tr>`),
    ""
  );

  return {
    text: stringData,
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Message</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 50px auto;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          .header {
            background-color: #007bff;
            padding: 20px;
            color: #fff;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 20px;
          }
          .content h2 {
            font-size: 20px;
            margin-bottom: 20px;
          }
          .content table {
            width: 100%;
            border-collapse: collapse;
          }
          .content table td {
            padding: 8px;
            border-bottom: 1px solid #ddd;
          }
          .content table tr:last-child td {
            border-bottom: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Message</h1>
          </div>
          <div class="content">
            <h2>You have received a new message:</h2>
            <table>
              ${htmlData}
            </table>
          </div>
        </div>
      </body>
    </html>`,
  };
};

export async function POST(req: NextRequest) {
  const data = await req.json();

  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
      subject: "New Contact Message from Your Website",
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
