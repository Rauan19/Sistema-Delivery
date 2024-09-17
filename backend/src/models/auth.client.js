import { sign } from "jsonwebtoken";
import { Banco } from "../config/db/prisma";
import { compare } from "bcrypt";
import dotenv from 'dotenv';

dotenv.config();

export class AuthenticateClientCase {
  async execute(username, password) {
    const client = await Banco.clients.findUnique({
      where: { username }
    });

    if (!client) {
      throw new Error("Invalid username or password");
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error("Invalid username or password");
    }

    const token = sign({ username }, process.env.TOKENCHAVE, {
      subject: client.id,
      expiresIn: "5d"
    });

    return token;
  }
}
