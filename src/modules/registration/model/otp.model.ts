export interface OTP {
  id: string;
  email: string;
  sessionId: string;
  otpValue: string;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

// add constructor to initialize the OTP object
