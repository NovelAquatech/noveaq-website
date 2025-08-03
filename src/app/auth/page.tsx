"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const org = searchParams?.get("org");

  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendOtp = async () => {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();

      setOtpSent(true);
      setMessage("OTP sent to your email.");
    } catch (err) {
      setMessage("Failed to send OTP.");
    }
    setLoading(false);
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp, org }),
      });

      if (!res.ok) throw new Error();

      const data = await res.json();
      window.location.href = data.redirectUrl;
    } catch (err) {
      setMessage("Invalid OTP.");
    }
    setLoading(false);
  };

  if (!org) return <p>Invalid access.</p>;

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="max-w-md mx-auto mt-20 p-4 border rounded-lg shadow">
        <h2 className="text-xl md:text-xl font-bold text-gray-800 mb-6 text-center">
          Enter Your Email to Receive OTP
        </h2>

        {!otpSent ? (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded mb-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSendOtp}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full p-2 border rounded mb-6"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={handleVerifyOtp}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
      </div>
    </main>
  );
}
