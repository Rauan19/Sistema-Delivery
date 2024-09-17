import { Banco } from "../config/db/prisma";

export class DeliveryCase {
  async execute(item_name, id_client, Status_delivery, endereco_coleta, endereco_entrega, client_name, delivery_notes, price) {
    try {
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
      });
      return delivery;
    } catch (error) {
      throw new Error(`Erro ao criar entrega: ${error.message}`);
    }
  }

  async findAllDeliveryCase() {
    try {
      const DeliverisAll = await Banco.deliveries.findMany({
        where: {
          id_deliveryman: null
        }
      });
      return DeliverisAll;
    } catch (error) {
      throw new Error(`Erro ao buscar todas as entregas: ${error.message}`);
    }
  }

  async updateDeliveryMan(id_delivery, Status_delivery ) {
    try {
      const deli = await Banco.deliveries.findUnique({
        where: {
          id: id_delivery
        }
      });

      if (!deli) {
        throw new Error("ID não existe");
      }

      const result = await Banco.deliveries.update({
        where: {
          id: id_delivery
        },
        data: {
          Status_delivery
        }
      });

      return result;
    } catch (error) {
      throw new Error(`Erro ao atualizar entregador: ${error.message}`);
    }
  }

  async updateDeliCli(id_delivery, id_deliveryman) {
    try {
      const DEliveresExist = await Banco.deliveries.findUnique({
        where: {
          id: id_delivery
        }
      });

      if (!DEliveresExist) {
        throw new Error("Entrega não existe");
      }

      const deli = await Banco.deliveries.update({
        where: {
          id: id_delivery
        },
        data: {
          id_deliveryman
        }
      });

      return deli;
    } catch (error) {
      throw new Error(`Erro ao atualizar entrega para cliente: ${error.message}`);
      
    }
  }

  async findDeliveryPorClient(id_client) {
    try {
      const Deliveries = await Banco.deliveries.findMany({
        where: {
          id_client
        }
      });

      return Deliveries;
    } catch (error) {
      throw new Error(`Erro ao buscar entregas por cliente: ${error.message}`);
    }
  }

  async findAllUsecaseDeliveryMan(id_deliveryman) {
    try {
      const Deliveries = await Banco.deliveries.findMany({
        where: {
          id_deliveryman
        }
      });

      return Deliveries;
    } catch (error) {
      throw new Error(`Erro ao buscar entregas por entregador: ${error.message}`);
    }
  }

  async deleteDeliveryClient(id_delivery) {
    try {
      const DeliveryExists = await Banco.deliveries.findUnique({
        where: {
          id: id_delivery
        }
      });

      if (!DeliveryExists) {
        throw new Error("Entrega não existe");
      }

      await Banco.deliveries.delete({
        where: {
          id: id_delivery
        }
      });

      return { message: "Entrega deletada" };
    } catch (error) {
      throw new Error(`Erro ao deletar entrega: ${error.message}`);
    }
  }
}
