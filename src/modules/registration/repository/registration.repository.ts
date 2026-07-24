// Database access will belong here after the basic API behavior is understood.

import { getDatabase } from "../../../connector/sql_lite_client.js";
import { Registration } from "../model/registration.model.js";

// TODO: Choose SQLite or PostgreSQL before implementing persistence.
export class RegistrationRepository {
  // Implement methods for database access here.
  // For example:
  // async getRegistrationByEmail(email: string): Promise<Registration | null> {
  //   // Query the database to retrieve registration by email
  // }

  async saveRegistration(registration: Registration): Promise<void> {
    const db = await getDatabase();
    db.run(
      `INSERT INTO registrations (id, sessionId, name, email, verifiedEmail, status, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        registration.id,
        registration.sessionId,
        registration.name,
        registration.email,
        registration.verifiedEmail ? 1 : 0,
        registration.status,
        registration.createdAt.toISOString(),
        registration.updatedAt.toISOString(),
      ]
    );
   }
  // async updateRegistration(registration: Registration): Promise<void> {
  //   // Query the database to update registration
  // }
}
