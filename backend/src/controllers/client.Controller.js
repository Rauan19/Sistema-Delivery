import { CreateCliente } from "../models/cliente"

   class CreateClientCOntroller {
    async createClientCT(req, res) {
        const {username, password} = req.body
    
        try {
         const result = await CreateCliente.create( username, password )
        return res.status(201).json(result)
        } catch (error) {
            return res.status(500).json( {erro: error.message} );
        }
    }
}


export default new CreateClientCOntroller()