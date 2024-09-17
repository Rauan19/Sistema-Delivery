import {hash} from 'bcrypt'
import { Banco } from "../config/db/prisma"

export class CreateCliente {
   static async create(username, password, name) {

        const clientExist = await Banco.clients.findUnique({
        where: {
            username
        }
    })
 

    if(clientExist) {
        throw new Error("Client já existe")
    }

    const hashPassword = await hash(password, 10)

    const client = await Banco.clients.create({
        data: {
         username: username,
         password: hashPassword,
         name
        }
    })

    return client;
        
   } 
       

}