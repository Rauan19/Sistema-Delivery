import { BarraHome  } from "../../components/Barrahome/barrahome"
import { HeaderDeliveryMan } from "../../components/headerdeliveruMAn/headerdeliveryman"
import { CaixaADD ,  NovaEntrega, Footer} from "./cliente.style"
export const PageClient = () => {
    return (
        <>
        <HeaderDeliveryMan />
        <BarraHome />
        <CaixaADD>
            <NovaEntrega>
                <h2>Adicionar Nova Entrega</h2>
                <input type="text" id="coleta" placeholder="Local de Coleta" required />
                <input type="text" id="entrega" placeholder="Local de Entrega" required />
                <input type="number" id="taxa" placeholder="Taxa" required />
                <textarea id="instrucao" placeholder="Instruções" required></textarea>
                <button >Adicionar Entrega</button>
            </NovaEntrega>

          

        </CaixaADD>
            <Footer >
              <p>&copy; 2024 DFood. Todos os direitos reservados.</p>
            </Footer>
    </>
    )
}