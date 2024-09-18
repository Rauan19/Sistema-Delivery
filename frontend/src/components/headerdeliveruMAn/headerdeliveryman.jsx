import { Headerstyle, IMG, CenterDoheader, TitleLogo, Div, Sair } from "./headerstyledelivery";
import { useState, useEffect } from "react";
import { Siderbar } from "../sidebar/sidebar";
import { apiMan } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { BlinkBlur } from "react-loading-indicators"; // Importando o indicador de carregamento

export const HeaderDeliveryMan = () => {
  const [abrirMenu, setAbrirmenu] = useState(false);
  const [entregas, setEntregas] = useState([]);
  const [quantidadeEntregas, setQuantidadeEntregas] = useState(0);
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const session = JSON.parse(localStorage.getItem("deliMan"));
  const navigate = useNavigate();

  const AbrirMenu = () => {
    setAbrirmenu(true);
  };

  const FecharMenu = () => {
    setAbrirmenu(false);
  };

  const DeslogarEntregador = () => {
    localStorage.removeItem("deliMan");
    navigate('/login/entregador');
  };

  const atualizarEntregas = async () => {
    try {
      const response = await apiMan.get('/deliveries', {
        headers: {
          Authorization: `Bearer ${session.token}`
        }
      });
      setEntregas(response.data);
      setQuantidadeEntregas(response.data.length);
    } catch (error) {
      console.error("Erro ao buscar entregas:", error);
      alert('Erro ao buscar entregas');
    } finally {
      setLoading(false); // Indica que o carregamento foi concluído
    }
  };

  useEffect(() => {
    atualizarEntregas();
  }, []);

  return (
    <Headerstyle>
      <CenterDoheader>
        <IMG src="https://static.vecteezy.com/system/resources/thumbnails/008/492/069/small_2x/delivery-cartoon-illustration-png.png" alt="Logo" />
        <TitleLogo>DFood</TitleLogo>
      </CenterDoheader>
      <Div>
        <nav>
          {loading ? ( // Verifica se está carregando
            <BlinkBlur size="10" color="red" /> // Exibe o indicador de carregamento
          ) : (
            <>
              <h5>{quantidadeEntregas}</h5>
              <p onClick={AbrirMenu}>Minhas Entregas</p>
            </>
          )}
        </nav>
        <Sair onClick={DeslogarEntregador}>Sair</Sair>
      </Div>
      <Siderbar
        isOpen={abrirMenu}
        fecharMenu={FecharMenu}
        entregasCliente={entregas}
        userType="entregador"
        atualizarentregacliente={atualizarEntregas}
        atualizarQuantidadeEntregas={setQuantidadeEntregas} // Passar a função
      />
    </Headerstyle>
  );
};
