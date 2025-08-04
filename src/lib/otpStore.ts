const globalAny = globalThis as any;

if (!globalAny.otpStore) {
  globalAny.otpStore = {};
}

const otpStore: Record<string, { otp: string; expiresAt: number }> = globalAny.otpStore;

const TTL = 10 * 60 * 1000;

export function setOtp(email: string, otp: string) {
  const key = email.trim().toLowerCase();
  otpStore[key] = {
    otp,
    expiresAt: Date.now() + TTL,
  };  
}

export function getOtp(email: string): string | undefined {
  const key = email.trim().toLowerCase();
  const record = otpStore[key];
  if (!record) return undefined;
  if (Date.now() > record.expiresAt) {
    delete otpStore[key];
    console.warn(`OTP expired for ${key}`);
    return undefined;
  }  
  return record.otp;
}

export function deleteOtp(email: string) {
  const key = email.trim().toLowerCase();
  delete otpStore[key];
}

