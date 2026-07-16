import express from "express";
import { registrationRouter } from "./modules/registration/registration.routes.js";

export const app = express();

app.use(express.json());

app.get("/health", (_request, response) => {
  response.json({ status: "UP" });
});

app.use("/api/v1/registrations", registrationRouter);
