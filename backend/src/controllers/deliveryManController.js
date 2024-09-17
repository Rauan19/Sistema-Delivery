
import { CreateDeliveruMan } from "../models/DeliveryMan";

   class CreateDeliveryManCOntroller {
    async createDeliveryMan(req, res) {
        const {username, password, name} = req.body
    
        try {
            const NovoCreate = new CreateDeliveruMan
         const result = await NovoCreate.execute( username, password, name )
        return res.status(201).json(result)
        } catch (error) {
            return res.status(500).json( {erro: error.message} );
        }
    }
}


export default new CreateDeliveryManCOntroller()