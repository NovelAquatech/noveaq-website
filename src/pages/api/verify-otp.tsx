import type { NextApiRequest, NextApiResponse } from 'next';
import { getOtp, deleteOtp, logOtpStore } from '@/lib/otpStore';
import CryptoJS from 'crypto-js';

const getPassword = (org: string) => {
  switch (org) {
    case 'farming':
      return "$joeFarm16052025";
    case 'engineering':
      return "$seelySensors18340932";
    case 'weather':
      return process.env.WEATHER_PASSWORD;
    default:
      return null;
  }
};
// console.log("env check", process.env.ENGINEERING_PASSWORD);// Not working


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, otp, org } = req.body;
  const storedOtp = getOtp(email);

  if (!email || !otp || !org) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  if (!storedOtp || storedOtp !== otp) {
    return res.status(401).json({ error: 'Invalid or expired OTP' });
  }
  deleteOtp(email);

  const password = getPassword(org);
  
  if (!password) {
    return res.status(400).json({ error: 'Invalid Organization' });
  }

  // Encrypt password using base64
  const encrypted = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(password));

  const redirectUrl = `https://novelaquatech.com/novel/?p=${encrypted}`;
  return res.status(200).json({ redirectUrl });
}
