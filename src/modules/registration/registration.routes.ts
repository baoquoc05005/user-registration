import { Router } from "express";
import { RegistrationController } from './registration.controller.js';

export const registrationRouter = Router();
const registrationController = new RegistrationController();

// TODO Lesson 1: Add POST / to accept name and email.
// TODO Lesson 2: Add POST /:registrationId/verify-otp.
// TODO Lesson 3: Add POST /:registrationId/resend-otp.
// TODO Lesson 4: Add POST /:registrationId/complete.


registrationRouter.post("/", (_request, response) => {

  registrationController.createRegistration(_request, response);

  // response.status(201).json({ message: "Registration created successfully." });
});

registrationRouter.post("/:registrationId/verify-otp", (_request, response) => {

  response.status(200).json({ message: "OTP verified successfully." });
});