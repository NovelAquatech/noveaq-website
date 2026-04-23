import type { NextApiRequest, NextApiResponse } from "next";
import { getOtp, deleteOtp } from "@/lib/otpStore";
import CryptoJS from "crypto-js";

const orgConfig: Record<string, { url: string; password?: string }> = {
  farming: {
    url: "https://portal.novelaquatech.com/",
    password: "$joeFarm16052025",
  },
  engineering: {
    url: "https://portal.novelaquatech.com/",
    password: "$seelySensors18340932",
  },
  weather: {
    url: "https://portal.novelaquatech.com/",
    password: "$NikTVHS3844",
  },
  camera: {
    url: "https://security.novelaquatech.com/",
  },
  "tracking-solution": {
    url: "https://tracking-app-admin-web.vercel.app/logistics/",
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, otp, org } = req.body;

  if (!email || !otp || !org) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const storedOtp = getOtp(email);

  if (!storedOtp || storedOtp !== otp) {
    return res.status(401).json({ error: "Invalid or expired OTP" });
  }

  deleteOtp(email);

  const config = orgConfig[org];

  if (!config) {
    return res.status(400).json({ error: "Invalid Organization" });
  }

  let redirectUrl = config.url;

  if (config.password) {
    const encrypted = CryptoJS.enc.Base64.stringify(
      CryptoJS.enc.Utf8.parse(config.password),
    );
    redirectUrl += `?p=${encrypted}`;
  }

  return res.status(200).json({ redirectUrl });
}
