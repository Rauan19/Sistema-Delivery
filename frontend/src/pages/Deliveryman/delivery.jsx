import { BarraHome } from "../../components/Barrahome/barrahome"
import { HeaderDeliveryMan } from "../../components/headerdeliveruMAn/headerdeliveryman"
import { Butao } from "./delyveryStyle"
import { CardsEntrega } from "./delyveryStyle"

export const PageDeliveryMan = () => {
return (
    <>
      <HeaderDeliveryMan/>
      
      <BarraHome/>
     
      <CardsEntrega>
        <div>
         <p>Encomenda</p>
        <p>Colete: São Felix</p>
        <p>Entega: Muritiba</p>
        <h5>Cliente: Rauan</h5>  
        </div>
        <div>
            <Butao>Ver mais</Butao>
            <Butao>Pegar</Butao>
        </div>

      
      </CardsEntrega>
      <CardsEntrega>
        <div>
         <p>Encomenda</p>
        <p>Colete: São Felix</p>
        <p>Entega: Muritiba</p>
        <h5>Cliente: Rauan</h5>  
        </div>
        <div>
            <Butao>Ver mais</Butao>
            <Butao>Pegar</Butao>
        </div>

      
      </CardsEntrega>
      <CardsEntrega>
        <div>
         <p>Encomenda</p>
        <p>Colete: São Felix</p>
        <p>Entega: Muritiba</p>
        <h5>Cliente: Rauan</h5>  
        </div>
        <div>
            <Butao>Ver mais</Butao>
            <Butao>Pegar</Butao>
        </div>

      
      </CardsEntrega>
  

    </>
    
)
}