import { verify } from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export async function EnsureAuthenClient(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token required" });
  }

  try {
    const token = authHeader.replace("Bearer ", "");
    const { subject } = verify(token, process.env.TOKENCHAVE);
    req.id_client = subject;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
