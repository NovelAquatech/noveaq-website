"use client";

import { useSearchParams } from "next/navigation";
import React, { useState, useEffect, Suspense } from "react";

 function AuthContent() {
  const searchParams = useSearchParams();
  const org = searchParams?.get("org");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);
  const [verifying, setVerifying] = useState(false);
  const [resending, setResending] = useState(false);
  useEffect(() => {
    let timer: any;
    if (otpSent && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [otpSent, timeLeft]);

  const formatTime = (seconds: any) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const handleSendOtp = async () => {
    setResending(true);
    setMessage("");
    setLoading(true);
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        // setEmail("")
        setOtpSent(true);
        setTimeLeft(600);
        setMessage("OTP sent to your email.");
      } else {
        const data = await res.json();
        setMessage(data.error || "Failed to send OTP.");
      }
    } catch (err) {
      setMessage("Something went wrong while sending OTP.");
    } finally {
      setResending(false);
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) return;
    setVerifying(true);
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
      setMessage("Invalid OTP! Please enter the correct OTP or generate new one.");
      setOtp("")
    }
    setVerifying(false);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="max-w-md mx-auto mt-20 p-4 border rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
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
              disabled={loading || !email}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full p-2 border rounded mb-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={handleVerifyOtp}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-2"
              disabled={verifying || !otp}
            >
              {verifying ? "Verifying..." : "Verify OTP"}
            </button>
            <button
              onClick={handleSendOtp}
              className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors mb-2 mx-2"
              disabled={resending}
            >
              {loading ? "Resending OTP..." : "Resend OTP"}
            </button>
            <p className="text-sm text-gray-700 mt-2">
              {timeLeft > 0
                ? `Time remaining: ${formatTime(timeLeft)}`
                : "Time expired. Please resend OTP."}
            </p>
          </>
        )}

        {message  && (
          <p className="mt-4 text-medium text-gray-700 transition-opacity">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}


export default function AuthPage() {
  return (
    <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
      <AuthContent />
    </Suspense>
  );
}