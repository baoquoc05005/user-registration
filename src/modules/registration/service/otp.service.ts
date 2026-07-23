// OTP generation, expiration, delivery, and verification will belong here.
// TODO: Implement this only after the first registration route works.
import { IOTPRepository } from "../repository/otp.repository.js";

export class OTPService {
  constructor(private otpRepository: IOTPRepository) {}
  async generateOTP(email: string): Promise<string> {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await this.otpRepository.saveOTP(email, otp);
    return otp;
  }

  async verifyOTP(email: string, otp: string): Promise<boolean> {
    const storedOtp = await this.otpRepository.getOTP(email);
    return storedOtp === otp;
  }

}
