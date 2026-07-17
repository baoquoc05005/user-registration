// Controllers will receive HTTP requests and return HTTP responses.
export class RegistrationController {
  public async createRegistration(_request: any, response: any) {
      // TODO: Extract name and email from _request
      const { name, email } = _request.body;

      // validate email format
      if (!email ) {
          return response.status(400).json({ message: "Email is required." });
      }

      if ( !/^\S+@\S+\.\S+$/.test(email)) {
          return response.status(400).json({ message: "Invalid email format." });
      }

      // check email uniqueness in the database


      // generate OTP

      // save OTP and store it in the database with a TTL of 5 minutes
      
      // send OTP via email to the user
      response.status(201).json({ message: "Registration created successfully." });
  }
}