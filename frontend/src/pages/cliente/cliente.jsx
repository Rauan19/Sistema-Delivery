import { useState } from "react";
import { BarraHome } from "../../components/Barrahome/barrahome";


import { CaixaADD, NovaEntrega, Footer, LoadingContainer } from "./cliente.style";
import { api } from "../../services/api";
import { HeaderDeliveryCliente } from "../../components/headerdeliveruMAn/headCliente";
import {BlinkBlur} from 'react-loading-indicators'

export const PageClient = () => {
  const [loading, setLoading] = useState(false)
  const session = JSON.parse(localStorage.getItem("deli"));
  const userId = session?.subject;

  const [deliveryData, setDeliveryData] = useState({
    item_name: "",
    endereco_coleta: "",
    endereco_entrega: "",
    client_name: "",
    delivery_notes: "",
    Status_delivery: "Pendente",
    price: ""  // Mantido como string inicialmente
  });
 


  const AdicionarEntrega = async (ev) => {
    setLoading(true)
    ev.preventDefault();

    if (!userId) {
      alert('Usuário não autenticado');
      return;
    }

    // Convertendo price para número, ou null se não for válido
    const deliveryDataWithCorrectPrice = {
      ...deliveryData,
      price: deliveryData.price ? parseFloat(deliveryData.price) : null
    };

   

    try {
       await api.post(`/delivery/${userId}`, deliveryDataWithCorrectPrice, {
        headers: {
          Authorization: `Bearer ${session.token}`,
          'Content-Type': 'application/json'
        }
      });
      
      alert("Entrega Publicada");
     
      setLoading(false)
      
      
      
    } catch (error) {
      setLoading(false)
       alert('Erro no servidor ', {error});
        
      
    } 
  };

  return (
    <>
      <HeaderDeliveryCliente  />
      {loading ? (
        <LoadingContainer>
        <BlinkBlur color="red" size="medium" />
      </LoadingContainer>
      ) : (
        <>
          <BarraHome />
      <CaixaADD>
        <NovaEntrega onSubmit={AdicionarEntrega}>
          <h2>Adicionar Nova Entrega</h2>
          <input 
            type="text" 
            id="endereco_coleta" 
            placeholder="Local de Coleta" 
            required 
            value={deliveryData.endereco_coleta} 
            onChange={(e) => setDeliveryData(prevData => ({...prevData, endereco_coleta: e.target.value}))} 
          />
          <input 
            type="text" 
            id="item_name"
            placeholder="Nome do item" 
            value={deliveryData.item_name} 
            onChange={(e) => setDeliveryData(prevData => ({...prevData, item_name: e.target.value}))} 
          />
          <input 
            type="text" 
            id="client_name"
            placeholder="Seu nome" 
            value={deliveryData.client_name} 
            onChange={(e) => setDeliveryData(prevData => ({...prevData, client_name: e.target.value}))} 
          />
          <input 
            type="text" 
            id="endereco_entrega"
            placeholder="Local de Entrega" 
            required 
            value={deliveryData.endereco_entrega} 
            onChange={(e) => setDeliveryData(prevData => ({...prevData, endereco_entrega: e.target.value}))} 
          />
          <input 
            type="number" 
            id="price"
            placeholder="Taxa" 
            required 
            value={deliveryData.price} 
            onChange={(e) => setDeliveryData(prevData => ({...prevData, price: e.target.value}))} 
          />
          <textarea 
            id="delivery_notes"
            placeholder="Instruções" 
            required 
            value={deliveryData.delivery_notes} 
            onChange={(e) => setDeliveryData(prevData => ({...prevData, delivery_notes: e.target.value}))}
          ></textarea>
          <button type="submit">Adicionar Entrega</button>
        </NovaEntrega>
      </CaixaADD>
      <Footer>
        <p>&copy; 2024 DFood. Todos os direitos reservados.</p>
      </Footer>
       </>
      )}
    
      
    </>
  );
};
