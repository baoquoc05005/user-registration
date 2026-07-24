import {OTP} from "../model/otp.model.js";
import {getDatabase} from "../../../connector/sql_lite_client.js";

export interface IOTPRepository {
  saveOTP(email: string, sessionId: string, otp: string): Promise<void>;
  getOTP(email: string): Promise<string | null>;
  deleteOTP(email: string): Promise<void>;
}

export class OTPRepository implements IOTPRepository {

  async saveOTP(email: string, sessionId: string, otp: string): Promise<void> {
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // OTP expires in 5 minutes
    const generatedId = Math.random().toString(36).substring(2, 9);

    // Implementation for saving OTP with expiration

    const newOtp: OTP = { id: generatedId, email: email, sessionId: sessionId, otpValue: otp, expiresAt, createdAt: new Date(), updatedAt: new Date() };
    const db = await getDatabase();
    db.run(
      `INSERT INTO otps (id, email, sessionId, otpValue, expiresAt, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [newOtp.id, newOtp.email, newOtp.sessionId, newOtp.otpValue, newOtp.expiresAt.toISOString(), newOtp.createdAt.toISOString(), newOtp.updatedAt.toISOString()]
    );

  }

  async getOTP(email: string): Promise<string | null> {
    // Implementation for retrieving OTP
    return null;
  }

    async deleteOTP(email: string): Promise<void> {
  }

}