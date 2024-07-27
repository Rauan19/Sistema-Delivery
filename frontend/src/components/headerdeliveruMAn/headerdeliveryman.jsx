
import { Headerstyle, IMG, CenterDoheader, TitleLogo, Div, Sair} from "./headerstyledelivery"
import { useState } from "react"
import { Siderbar } from "../../components/sidebar/sidebar"
export const HeaderDeliveryMan = () => {
   const [abrirMenu, setAbrirmenu] = useState(false)

    const AbrirMenu = () => {
    setAbrirmenu(true);
};

       const FecharMenu = () => {
    setAbrirmenu(false);
};

    return (

        <Headerstyle >
            <CenterDoheader>
             <IMG src="https://static.vecteezy.com/system/resources/thumbnails/008/492/069/small_2x/delivery-cartoon-illustration-png.png" alt="" />  
            <TitleLogo>DFood</TitleLogo> 
            </CenterDoheader>
            
            <Div>
                <nav>
                 <h5>7</h5>
                <p onClick={AbrirMenu}>Minhas Entregas </p>    
                </nav>
             
                 <Sair>Sair</Sair>  
            </Div>
         
            <Siderbar isOpen={abrirMenu} fecharMenu={FecharMenu}  />
           
            
         
        </Headerstyle>
    )
}