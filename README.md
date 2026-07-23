# Registration API Starter

This is intentionally a starter project, not a completed registration backend.
It provides the Node.js, TypeScript, Express, and module structure needed for the children to implement the feature one lesson at a time with an assistant.

## Start the project

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

Open `http://localhost:3000/health`. The expected response is:

```json
{"status":"UP"}
```

## Registration module

The starter module is under `src/modules/registration`:

- `registration.routes.ts` — API URLs
- `registration.controller.ts` — HTTP request and response handling
- `registration.service.ts` — business logic
- `registration.validation.ts` — request validation
- `registration.types.ts` — TypeScript domain types
- `registration.repository.ts` — future database access
- `otp.service.ts` — future OTP logic

## Suggested lessons

1. Create `POST /api/v1/registrations` with name and email.
2. Add input validation and friendly errors.
3. Generate and verify an OTP.
4. Add resend and expiration behavior.
5. Validate password and password confirmation.
6. Add persistent storage.
7. Add password hashing and real email delivery.
8. Add tests for success and error cases.

Each lesson should be coded by the learner. Ask the assistant for an explanation, a small next step, or a review rather than requesting the complete feature.
