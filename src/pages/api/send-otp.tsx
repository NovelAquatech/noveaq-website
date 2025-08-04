import type { NextApiRequest, NextApiResponse } from "next";
import { EmailClient } from "@azure/communication-email";
import { setOtp } from "@/lib/otpStore";
const allowedEmails = [
  "bhattacharyya.deep@gmail.com",
  "novelaquatech@gmail.com",
  "gautam@novelaquatech.com",
  "a.mitra@qantecautomation.com",
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const email = req.body.email?.toLowerCase().trim();
  if (!email || typeof email !== "string") {
    return res.status(400).json({ error: "Invalid email" });
  }

 
  if (!allowedEmails.includes(email)) {
    return res
      .status(403)
      .json({ error: "This email is not authorized to receive an OTP." });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  setOtp(email, otp);
 

  try {
    const connectionString = process.env.ACS_CONNECTION_STRING ?? "";
    const client = new EmailClient(connectionString);

    const emailMessage = {
      senderAddress:
        "DoNotReply@33bfff8c-dfd0-4b56-beb8-109a63d8afe2.azurecomm.net",
      content: {
        subject: "Your OTP",
        plainText: `Your OTP is: ${otp}. It will expire in 10 minutes.`,
      },
      recipients: {
        to: [{ address: email }],
      },
    };

    const poller = await client.beginSend(emailMessage);
    const response = await poller.pollUntilDone();

    if (response.status !== "Succeeded") {
      throw new Error("Email failed");
    }

    return res.status(200).json({ message: "OTP sent" });
  } catch (err) {
    console.error("Azure email error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
