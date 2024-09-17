import { DeliveryCase } from "../models/Delivery"

    class CreateDeliveryController {
    async handle (req, res) {
         const CreateDeliveryUUseCase = new DeliveryCase()
         const { item_name,
                  Status_delivery,
                  endereco_coleta,
                  endereco_entrega,
                  client_name,
                  delivery_notes,
                  price} = req.body
         const {id_client} = req.params
         
           
   

    try {
         const delivery = await CreateDeliveryUUseCase.execute( item_name, id_client,Status_delivery,endereco_coleta, endereco_entrega, client_name, delivery_notes, price)

        return res.status(201).json(delivery)
    } catch (error) {
        console.error('Erro ao criar entrega:', {err: error.message}); // Adiciona mais detalhes sobre o erro
        return res.status(500).json({ err: 'Erro interno do servidor. Verifique os logs para mais detalhes.' });
        
    }
       

    }

    async handleFinALl (req, res) {
         const deliverycase = new DeliveryCase()
         const deliveresALl = await deliverycase.findAllDeliveryCase()
         return res.status(200).json(deliveresALl)
    }

    async UPdateDeliveryManCOntroLL (req, res) {
        const {id_delivery} = req.params
        const {Status_delivery} = req.body
      
 
     const deliverycase = new DeliveryCase()
      try {
         const delivery = await deliverycase.updateDeliveryMan( id_delivery, Status_delivery )

        return res.status(200).json(delivery)
      } catch (error) {

        return res.status(401).json({err: error.message})
    
      }
    }

    async FindDeliveryesPorCLientController (req, res) {
        const {id_client} = req.params;
        const DeliverisNew = new DeliveryCase()
        try {
           const deliveris = await DeliverisNew.findDeliveryPorClient(id_client)
           return res.status(200).json(deliveris)
        } catch (error) {
            return res.status(401).json({error})
            
        }
    }

    async FinALLDeliveryManCOntroller (req, res) {
        const {id_deliveryman} = req.params
        const DeliverisNew = new DeliveryCase()

        try {
            const result = await DeliverisNew.findAllUsecaseDeliveryMan(id_deliveryman)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(401).json({error})
            
        }
    }

    async AtualizarDeliveryClient (req, res) {
        const {id_delivery} = req.params
        const {id_deliveryman} = req.body

        try {
            const newDeli = new DeliveryCase()
            const UpdateDeli = await  newDeli.updateDeliCli(id_delivery, id_deliveryman)

            return res.status(200).json(UpdateDeli)
        } catch (error) {
            return res.status(401).json({err: error.message})
            
        }
    }

    async DeleteDeliveryController (req, res) {
        const {id_delivery} = req.params

        try {
            const newDeli = new DeliveryCase()
            const resuly = await newDeli.deleteDeliveryClient(id_delivery)
            return res.status(200).json(resuly)
        } catch (error) {
            return res.status(401).json({err: message.errpr})
            
        }
    }
}


export default new CreateDeliveryController()