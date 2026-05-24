import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  req: Request
) {

  try {

    const body = await req.json();

    const {
      name,
      email,
      message,
    } = body;

    const data =
      await resend.emails.send({

      from:
        "Portfolio <onboarding@resend.dev>",

      to:
        "denisyadavv@gmail.com",

      subject:
        `New Message From ${name}`,

      html: `
        <h2>New Contact Form Message</h2>

        <p>
          <strong>Name:</strong>
          ${name}
        </p>

        <p>
          <strong>Email:</strong>
          ${email}
        </p>

        <p>
          <strong>Message:</strong>
          ${message}
        </p>
      `,
    });

    return Response.json(data);

  } catch (error) {

    return Response.json(
      { error },
      { status: 500 }
    );
  }
}