import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, mobile, email, state, city, zipCode } = body;

    // Validate required fields
    if (!firstName || !lastName) {
      return NextResponse.json(
        { error: "First Name and Last Name are required" },
        { status: 400 }
      );
    }

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "haldarainit@gmail.com",
        pass: "wjmd oqrm nmlr akfq", // App password
      },
    });

    // Email content
    const mailOptions = {
      from: "haldarainit@gmail.com",
      to: "haldarainit@gmail.com",
      subject: `New Enquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c2d12;">New Enquiry Form Submission</h2>
          <div style="background-color: #f5f5f4; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #7c2d12; margin-top: 0;">Contact Information:</h3>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            ${mobile ? `<p><strong>Mobile:</strong> ${mobile}</p>` : ""}
            ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
          </div>
          <div style="background-color: #f5f5f4; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #7c2d12; margin-top: 0;">Location Details:</h3>
            ${state ? `<p><strong>State:</strong> ${state}</p>` : ""}
            ${city ? `<p><strong>City:</strong> ${city}</p>` : ""}
            ${zipCode ? `<p><strong>Zip Code:</strong> ${zipCode}</p>` : ""}
          </div>
          <p style="margin-top: 20px; color: #78716c; font-size: 12px;">
            This enquiry was submitted from the Sarv website enquiry form.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Enquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry. Please try again later." },
      { status: 500 }
    );
  }
}

