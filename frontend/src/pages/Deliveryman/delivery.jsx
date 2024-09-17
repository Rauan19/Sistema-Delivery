import { BarraHome } from "../../components/Barrahome/barrahome";
import { HeaderDeliveryMan } from "../../components/headerdeliveruMAn/headerdeliveryman";
import { useEffect, useState } from "react";
import { Butao } from "./delyveryStyle";
import { CardsEntrega, ContainerEntrega, LOACENTER } from "./delyveryStyle";
import { apiMan } from "../../services/api";
import { format } from "date-fns";
import { BlinkBlur } from "react-loading-indicators";

export const PageDeliveryMan = () => {
  const [entregas, setEntregas] = useState([]);
  const [loading, setLoading] = useState(false);
  const session = JSON.parse(localStorage.getItem("deliMan"));
  const userId = session?.subject; // Certifique-se de usar o campo correto

  const TodasEntregas = async () => {
    setLoading(true);
    if (!session) {
      alert("Sessão não encontrada");
      return;
    }

    try {
      const response = await apiMan.get("/deliveries", {
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
      });

      setEntregas(response.data);
    } catch (error) {
      alert("Erro ao buscar entregas");
    } finally {
      setLoading(false);
    }
  };

  const PegarEntrega = async (id_delivery) => {
    setLoading(true);
    try {
      await apiMan.put(
        `/update/${id_delivery}`,
        { id_deliveryman: userId },
        {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      );
      TodasEntregas();
      const event = new Event("atualizarEntregasDeliMan");
      window.dispatchEvent(event);
    } catch (error) {
      
      console.log("Erro ao pegar entrega:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    TodasEntregas();
    const handleUpdateEvent = () => {
      TodasEntregas();
    };

    window.addEventListener("atualizarEntregas", handleUpdateEvent);
    window.addEventListener("atualizarEntregasDeliMan", handleUpdateEvent);

    return () => {
      window.removeEventListener("atualizarEntregas", handleUpdateEvent);
      window.removeEventListener("atualizarEntregasDeliMan", handleUpdateEvent);
    };
  }, []);

  return (
    <>
      <HeaderDeliveryMan />
      {loading ? (
        <LOACENTER>
          <BlinkBlur color="red" size="medium" />
        </LOACENTER>
      ) : (
        <>
          <BarraHome />
          <ContainerEntrega>
            {entregas.map((item) => (
              <CardsEntrega key={item.id}>
                <div>
                  <p>
                    <h4>Nome:</h4> {item.item_name}
                  </p>
                  <p>
                    <h4>Coleta:</h4> {item.endereco_coleta}
                  </p>
                  <p>
                    <h4>Entrega:</h4> {item.endereco_entrega}
                  </p>
                  <p>
                    <h4>Cliente:</h4> {item.client_name}
                  </p>
                  <p>
                    <h4>Descrição:</h4> {item.delivery_notes}
                  </p>
                  <h4>
                    Data: {format(new Date(item.created_at), "dd/MM/yyyy HH:mm")}
                  </h4>
                </div>
                <div>
                  <Butao onClick={() => PegarEntrega(item.id)}>Pegar</Butao>
                </div>
              </CardsEntrega>
            ))}
          </ContainerEntrega>
        </>
      )}
    </>
  );
};
