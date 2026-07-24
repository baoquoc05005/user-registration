// OTP generation, expiration, delivery, and verification will belong here.
// TODO: Implement this only after the first registration route works.
import { OTPRepository } from "../repository/otp.repository.js";

const otpRepository = new OTPRepository();

export class OTPService {

  async generateOTP(email: string, sessionId: string): Promise<string> {

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(`Generated OTP for ${email}: ${otp}`);
    await otpRepository.saveOTP(email, sessionId, otp);
    return otp;
  }

  async verifyOTP(email: string, otp: string): Promise<boolean> {
    // 1. Load pending registration
    // get sessionId by email from the database

    // 2. compare submitted OTP with stored OTP
    // get OTP from the database by email
    console.log(`Verifying OTP for ${email}: ${otp}`);
    const storedOtp = await otpRepository.getOTP(email);
    // TODO: get OTP from the database by sessionId

    console.log(`Retrieved OTP for ${email}: ${storedOtp}`);
    //3. return OTP is valid
    return storedOtp === otp;

  }

}
