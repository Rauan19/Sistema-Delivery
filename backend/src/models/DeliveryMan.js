import { Banco } from "../config/db/prisma"
import { hash } from "bcrypt"



export class CreateDeliveruMan {
    async execute(username, password) {
        const deliverymanExist = await Banco.deliveryman.findUnique({
            where: {
                username
            }
        })

        if(deliverymanExist) {
            throw new Error("Entregador ja existe")
        }


        const hashpassword = await hash(password, 10)

        const DeliveryMan = await Banco.deliveryman.create({
            data: {
                username,
                password: hashpassword
            }
        })

        return DeliveryMan


    }
}