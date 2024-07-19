import {sign} from "jsonwebtoken"
import { Banco } from "../config/db/prisma"
import  {compare} from "bcrypt"
export class AuthenticateClientCase {
    async execute(username, password) {

        const client = await Banco.clients.findUnique({
            where: {
                username
            }
        })

        if(!client) {
            throw new Error("Username ou password invalido")
        }

        const passwordMatch  = await compare(password, client.password)

        if(!passwordMatch) {
            throw new Error("Username ou password invalido")
        }


        const token = sign({username}, "9ef20ec6832a9c4adfb35c2ae1d86f85", {
            subject: client.id,
            expiresIn: "5d"
        })

        return token

    }
}