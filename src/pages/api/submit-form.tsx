import type { NextApiRequest, NextApiResponse } from "next";
import {submitForm} from "@/lib/api"

export default async function handleSubmit(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const formData = req.body;
    const response = await submitForm(formData);
    res.status(200).json({ success: true, response });
  } catch (error: any) {
    console.error("Submit error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
}