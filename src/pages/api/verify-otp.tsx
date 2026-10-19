import type { NextApiRequest, NextApiResponse } from "next";
import { getOtp, deleteOtp } from "@/lib/otpStore";
import CryptoJS from "crypto-js";

// Server-only compatibility credentials. Never use NEXT_PUBLIC_* variables here.
// The legacy portal handoff still puts a password-equivalent in the URL; moving
// these values out of source does not make that protocol secure.
const orgConfig: Record<string, { url: string; password?: string; demo?: boolean }> = {
  farming: {
    url: "https://portal.novelaquatech.com/",
    password: process.env.DEMO_FARMING_PASSWORD,
    demo: true,
  },
  engineering: {
    url: "https://portal.novelaquatech.com/",
    password: process.env.DEMO_ENGINEERING_PASSWORD,
    demo: true,
  },
  monitor: {
    url: "https://portal.novelaquatech.com/",
    password: process.env.DEMO_MONITOR_PASSWORD,
    demo: true,
  },
  camera: {
    url: "https://security.novelaquatech.com/",
  },
  "tracking-solution": {
    url: "https://tracking-app-admin-web.vercel.app/logistics/",
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).end();

  const { email, otp, org } = req.body;
  if (!email || !otp || !org) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const storedOtp = getOtp(email);
  if (!storedOtp || storedOtp !== otp) {
    return res.status(401).json({ error: "Invalid or expired OTP" });
  }

  const config = Object.prototype.hasOwnProperty.call(orgConfig, org) ? orgConfig[org] : undefined;
  if (!config) {
    return res.status(400).json({ error: "Invalid Organization" });
  }
  if (config.demo && !config.password) {
    return res.status(503).json({ error: "Demo sign-in is temporarily unavailable." });
  }

  deleteOtp(email);
  let redirectUrl = config.url;
  if (config.password) {
    const encoded = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(config.password));
    redirectUrl += `?p=${encodeURIComponent(encoded)}`;
  }

  return res.status(200).json({ redirectUrl });
}
