
import { Banco } from "../config/db/prisma"


export class DeliveryCase {
    async execute (item_name, id_client, Status_delivery, endereco_coleta,endereco_entrega, client_name, delivery_notes, price) {
          const delivery = await Banco.deliveries.create({
            data: {
                item_name,
                id_client,
                Status_delivery,
                endereco_coleta,
                endereco_entrega,
                client_name,
                delivery_notes,
                price
            }
          })
          

          return delivery
    }

    async FIndAllDeliveryCase () {
        const DeliverisAll = await Banco.deliveries.findMany({
            where: {
                id_deliveryman: null
            }
        })
        return DeliverisAll
    }

    async UPdateDeliveryMan (id_delivery, id_deliveryman) {

        const deli = await Banco.deliveries.findUnique({
            where: {
                id: id_delivery
            }
        })

        if(!deli) {
            throw new Error("id nao exist")
        }
      
        const result = await Banco.deliveries.update({
            where: {
                id: id_delivery
            },
            data: {
                id_deliveryman
            }
        })

        return result

    }

    async UpdateDeliCLi (id_delivery, id_deliveryman) {
        const DEliveresExist = await Banco.deliveries.findUnique({
            where:{
                id: id_delivery
            }
        })

       if(!DEliveresExist){
        throw new Error("Delivery não exist")
       }
       

        const deli = await Banco.deliveries.update({
            where:{
                id: id_delivery
            },
            data: {
                id_deliveryman
            }
        })
        return deli
    }

    async FindDeliveryPOrClient (id_client) {
        const Deliveries = await Banco.deliveries.findMany({
            where: {
                id_client
            }
        })

        return Deliveries
    }

    async FINAllUsecaseDEliveryMan (id_deliveryman) {
        const Deliveries = await Banco.deliveries.findMany({
            where: {
                id_deliveryman
            }
            
        })

        return Deliveries
        
    }

    async DeleteDeliveryClient (id_delivery) {
        const DeliveryExits = await Banco.deliveries.findUnique({
            where:{
                id: id_delivery
            }

        })

      if(!DeliveryExits){
        throw new Error("Delivery nâo existe")
      }

      await Banco.deliveries.delete({
        where:{
            id: id_delivery
        }
      })

      return {message: "Delivery deletado"}
      
    }
}