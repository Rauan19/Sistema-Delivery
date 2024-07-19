


import { AuthentDeliveryManCase } from "../models/auth.DeliveryMan"

 export class  AuthticateDeliveryManController {
    async authMan (req, res) {
        const {username, password} = req.body

        try {
            const auth = new AuthentDeliveryManCase()
            
            const token = await auth.execute(username, password)
             return res.status(200).json({token})
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
     
    }
}

