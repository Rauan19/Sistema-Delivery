import {
  Componetsidebar,
  IMG,
  Div,
  CardCarrinho,
  Entregascarrinho,
  BotaoFechar
} from "./sidebar.style";

export const Siderbar = ({isOpen, fecharMenu}) => {

  return (
    
    <Componetsidebar  isOpen={isOpen} >
        <BotaoFechar onClick={fecharMenu}>Fechar</BotaoFechar>
      <Div>
        <IMG
          src="https://static.vecteezy.com/system/resources/thumbnails/008/492/069/small_2x/delivery-cartoon-illustration-png.png"
          alt=""
        />
        
        <h3>Minhas Entregas</h3>
      </Div>
      
      <CardCarrinho>
        <Entregascarrinho>
        Coleta: Muritiba
        Entrega: São Félix
        Tipo: Encomenda
        Taxa: 15R$
        <h3>Status: Pendente</h3>
          <div>
            <button>Cancelar</button>
            <select>
              <option value="opcao1">Preparando</option>
              <option value="opcao2">Saiu para entrega</option>
              <option value="opcao3">Entrege</option>
            </select>
          </div>
        </Entregascarrinho>
        <Entregascarrinho>
        Coleta: Muritiba
        Entrega: São Félix
        Tipo: Encomenda
        Taxa: 15R$
        <h3>Status: Pendente</h3>
          <div>
            <button>Cancelar</button>
            <select>
              <option value="opcao1">Preparando</option>
              <option value="opcao2">Saiu para entrega</option>
              <option value="opcao3">Entrege</option>
            </select>
          </div>
        </Entregascarrinho>
        <Entregascarrinho>
        Coleta: Muritiba
        Entrega: São Félix
        Tipo: Encomenda
        Taxa: 15R$
        <h3>Status: Pendente</h3>
          <div>
            <button>Cancelar</button>
            <select>
              <option value="opcao1">Preparando</option>
              <option value="opcao2">Saiu para entrega</option>
              <option value="opcao3">Entrege</option>
            </select>
          </div>
        </Entregascarrinho>
        <Entregascarrinho>
        Coleta: Muritiba
        Entrega: São Félix
        Tipo: Encomenda
        Taxa: 15R$
        <h3>Status: Pendente</h3>
          <div>
            <button>Cancelar</button>
            <select>
              <option value="opcao1">Preparando</option>
              <option value="opcao2">Saiu para entrega</option>
              <option value="opcao3">Entrege</option>
            </select>
          </div>
        </Entregascarrinho>
        <Entregascarrinho>
        Coleta: Muritiba
        Entrega: São Félix
        Tipo: Encomenda
        Taxa: 15R$
        <h3>Status: Pendente</h3>
          <div>
            <button>Cancelar</button>
            <select>
              <option value="opcao1">Preparando</option>
              <option value="opcao2">Saiu para entrega</option>
              <option value="opcao3">Entrege</option>
            </select>
          </div>
        </Entregascarrinho>
        <Entregascarrinho>
        Coleta: Muritiba
        Entrega: São Félix
        Tipo: Encomenda
        Taxa: 15R$
        <h3>Status: Pendente</h3>
          <div>
            <button>Cancelar</button>
            <select>
              <option value="opcao1">Preparando</option>
              <option value="opcao2">Saiu para entrega</option>
              <option value="opcao3">Entrege</option>
            </select>
          </div>
        </Entregascarrinho>
        <Entregascarrinho>
        Coleta: Muritiba
        Entrega: São Félix
        Tipo: Encomenda
        Taxa: 15R$
        <h3>Status: Pendente</h3>
        <div>
            <button>Cancelar</button>
            <select>
              <option value="opcao1">Preparando</option>
              <option value="opcao2">Saiu para entrega</option>
              <option value="opcao3">Entrege</option>
            </select>
          </div>
        </Entregascarrinho>
      </CardCarrinho>
    </Componetsidebar>
  );
};
