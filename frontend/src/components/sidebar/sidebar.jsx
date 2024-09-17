import { api, apiMan } from "../../services/api";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import {
  Componetsidebar,
  IMG,
  Div,
  CardCarrinho,
  Entregascarrinho,
  BotaoFechar
} from "./sidebar.style";
import { format } from 'date-fns';
import { BlinkBlur } from "react-loading-indicators"; // Importa o BlinkBlur

export const Siderbar = ({ isOpen, fecharMenu, entregasCliente, userType, atualizarentregacliente, atualizarQuantidadeEntregas }) => {
  const session = JSON.parse(localStorage.getItem("deli"));
  const SessionMan = JSON.parse(localStorage.getItem('deliMan'));
  const userId = SessionMan?.subject;
  const [EntregasDeliMAn, setEntrega] = useState([]);
  const [statusEntrega, setStatusEntrega] = useState({});
  const [loading, setLoading] = useState(false); // Estado de loading
  console.log(statusEntrega);

  const ExcluirEntrega = async (id_delivery) => {
    setLoading(true); // Ativa o loading
    try {
      await api.delete(`/delete/delivery/${id_delivery}`, {
        headers: {
          Authorization: `Bearer ${session.token}`
        }
      });
      alert("Entrega Excluída");
      atualizarentregacliente();
    } catch (error) {
      alert("Erro ao excluir entrega");
    } finally {
      setLoading(false); // Desativa o loading
    }
  };

  const MOstraentregaDeliMAn = async () => {
    setLoading(true); // Ativa o loading
    try {
      const response = await apiMan.get(`/deliveryman/deliveries/${userId}`, {
        headers: {
          Authorization: `Bearer ${SessionMan.token}`
        }
      });
      setEntrega(response.data);
      atualizarQuantidadeEntregas(response.data.length); // Atualiza a quantidade de entregas
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Desativa o loading
    }
  };

  const AtualizarStatus = async (id_delivery, novoStatus) => {
    setLoading(true); // Ativa o loading
    try {
      await apiMan.put(`/Status/update/${id_delivery}`, { Status_delivery: novoStatus }, {
        headers: {
          Authorization: `Bearer ${SessionMan.token}`
        }
      });
      MOstraentregaDeliMAn();
      const event = new Event("atualizarEntregas");
      window.dispatchEvent(event);
    } catch (error) {
      alert("Erro no servidor");
      console.log(error);
    } finally {
      setLoading(false); // Desativa o loading
    }
  };

  const DeixarEntrega = async (id_deliveryman) => {
    setLoading(true); // Ativa o loading
    try {
      await apiMan.put(`/update/${id_deliveryman}`, { id_deliveryman: null }, {
        headers: {
          Authorization: `Bearer ${SessionMan.token}`
        }
      });
      MOstraentregaDeliMAn();
      const event = new Event("atualizarEntregas");
      window.dispatchEvent(event);
    } catch (error) {
      alert("Erro no servidor");
    } finally {
      setLoading(false); // Desativa o loading
    }
  };

  useEffect(() => {
    if (userType !== 'cliente') {
      MOstraentregaDeliMAn();
    }

    const handleUpdateEvent = () => {
      MOstraentregaDeliMAn();
    };

    window.addEventListener("atualizarEntregasDeliMan", handleUpdateEvent);

    return () => {
      window.removeEventListener("atualizarEntregasDeliMan", handleUpdateEvent);
    };
  }, [userType]);

  return (
    <Componetsidebar isOpen={isOpen}>
      <BotaoFechar onClick={fecharMenu}>Fechar</BotaoFechar>
      <Div>
        <IMG
          src="https://static.vecteezy.com/system/resources/thumbnails/008/492/069/small_2x/delivery-cartoon-illustration-png.png"
          alt=""
        />
        <h3>Minhas Entregas</h3>
      </Div>
      <CardCarrinho>
        {loading ? (
          <BlinkBlur color="red" size="large" /> // Mostra o BlinkBlur enquanto está carregando
        ) : (
          userType === 'cliente' ? (
            entregasCliente.map(entrega => (
              <Entregascarrinho key={entrega.id}>
                Coleta: {entrega.endereco_coleta}
                <br />
                Entrega: {entrega.endereco_entrega}
                <br />
                Complemento: {entrega.delivery_notes}
                <br />
                Taxa: R${entrega.price}
                <h3>Status: {entrega.Status_delivery}</h3>
                <p>{format(new Date(entrega.created_at), 'dd/MM/yyyy HH:mm')}</p>
                <div>
                  <button onClick={() => ExcluirEntrega(entrega.id)}>Excluir</button>
                </div>
              </Entregascarrinho>
            ))
          ) : (
            EntregasDeliMAn.map(entrega => (
              <Entregascarrinho key={entrega.id}>
                Coleta: {entrega.endereco_coleta}
                <br />
                Entrega: {entrega.endereco_entrega}
                <br />
                Complemento: {entrega.delivery_notes}
                <br />
                Taxa: R${entrega.price}
                <br />
                Cliente: {entrega.client_name}
                <h3>Status: {entrega.Status_delivery}</h3>
                <p>{format(new Date(entrega.created_at), 'dd/MM/yyyy HH:mm')}</p>
                <div>
                  <button onClick={() => DeixarEntrega(entrega.id)}>Cancelar</button>
                  <select
                    value={statusEntrega[entrega.id] || entrega.Status_delivery}
                    onChange={(e) => {
                      const novoStatus = e.target.value;
                      if (window.confirm(`Você tem certeza que deseja alterar o status para "${novoStatus}"?`)) {
                        setStatusEntrega(prevStatus => ({
                          ...prevStatus,
                          [entrega.id]: novoStatus
                        }));
                        AtualizarStatus(entrega.id, novoStatus);
                      }
                    }}
                  >
                    <option value="Pendente">Pendente</option>
                    <option value="Saiu para coleta">Saiu para coleta</option>
                    <option value="saiu_para_entrega">Saiu para entrega</option>
                    <option value="entregue">Entregue</option>
                  </select>
                </div>
              </Entregascarrinho>
            ))
          )
        )}
      </CardCarrinho>
    </Componetsidebar>
  );
};

Siderbar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  fecharMenu: PropTypes.func.isRequired,
  entregasCliente: PropTypes.array.isRequired,
  userType: PropTypes.string.isRequired,
  atualizarentregacliente: PropTypes.func.isRequired,
  atualizarQuantidadeEntregas: PropTypes.func.isRequired, 
};
