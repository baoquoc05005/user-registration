// Controllers will receive HTTP requests and return HTTP responses.
import { randomUUID } from "crypto";
import { OTPService } from "./service/otp.service.js";
import { ParsedQs } from "qs";
import { Request, Response } from "express-serve-static-core";

const otpService = new OTPService();
const registrationService = new RegistrationService();

export class RegistrationController {
    completeRegistration(_request: any, _response: any) {
        const email = _request.body.email?.trim() ?? "";
        const sessionId = _request.session?.id ?? _request.sessionId ?? "";
        // 1. Load verified Registration
        // get registration from database by email and sessionId

        // check isVerifiedEmail is true

        // 2. Recheck email uniqueness
        // 3. Create user account
        // 4. Return success response
      throw new Error("Method not implemented.");
      //response.status(200).json({ message: "Registration completed successfully." });
    }

    public async verifyOTP(_request: any, _response: any) {
        const isOtpValid =  await otpService.verifyOTP(_request.body.email, _request.body.otp)
        if (!isOtpValid) {
            return _response.status(400).json({ message: "Invalid OTP." });
        }

        //4. Mark email verified if OTP is valid
        // set verifiedEmail to true in the database if OTP is valid
        return _response.status(200).json({ message: "OTP verified successfully." });
    }

    public async createRegistration(request: any, response: any) {
    // const { name, email } = _request.body;
    const email = request.body.email?.trim() ?? "";

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return response.status(400).json({ message: "Invalid email format." });
    }

    const sessionId =request.session?.id ?? request.sessionID ?? randomUUID();

    const otp = await otpService.generateOTP(email, sessionId);

    return response
        .status(201)
        .json({
            message: "Registration created successfully with OTP sent to your email. ",
        });
    }

}