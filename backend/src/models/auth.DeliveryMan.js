

import {sign} from "jsonwebtoken"
import { Banco } from "../config/db/prisma"
import  {compare} from "bcrypt"

export class AuthentDeliveryManCase {
    async execute(username, password) {

        const DeliveryMan = await Banco.deliveryman.findUnique({
            where: {
                username
            }
        })

        if(!DeliveryMan) {
            throw new Error("Username ou password invalido")
        }

        const passwordMatch  = await compare(password, DeliveryMan.password)

        if(!passwordMatch) {
            throw new Error("Username ou password invalido")
        }

        const token = sign({username}, "9ef20ec6832a9c4adfb3599c2ae1d86f85", {
            subject: DeliveryMan.id,
            expiresIn: "5d"
        })

        return token

    }
}