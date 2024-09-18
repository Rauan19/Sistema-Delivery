import { BlinkBlur } from "react-loading-indicators";    
import { Headerstyle, IMG, CenterDoheader, TitleLogo, Div, Sair } from "./headerstyledelivery"
import { useEffect, useState } from "react"
import { Siderbar } from "../sidebar/sidebar"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export const HeaderDeliveryCliente = () => {
   const [abrirMenu, setAbrirmenu] = useState(false)
   const session = JSON.parse(localStorage.getItem("deli"))
   const navigate = useNavigate()
   const userId = session?.subject
   const [entregasCLientte, setEntregasCliente] = useState(0)
   const [todasEntregaCLiente, setTdsentregaCliente] = useState([])
   const [loading, setLoading] = useState(true) // Estado de loading

   const AbrirMenu = () => {
       setAbrirmenu(true);
   };

   const MostrasEntregasCLiente = async () => {
       try {
           const response = await api.get(`/delivery/get/${userId}`, {
               headers: {
                   Authorization: `Bearer ${session.token}`
               }
           })
           setEntregasCliente(response.data.length)
           setTdsentregaCliente(response.data)
       } catch (error) {
           console.error("Erro ao buscar entregas:", error)
       } finally {
           setLoading(false) // Carregamento concluído
       }
   }

   useEffect(() => {
       MostrasEntregasCLiente()
   }, [])

   const FecharMenu = () => {
       setAbrirmenu(false);
   };

   const DeslogarElimpartoken = () => {
       localStorage.removeItem("deli")
       navigate('/loginClient')
   }

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
                           <h5>{entregasCLientte}</h5>
                           <p onClick={AbrirMenu}>Minhas Entregas</p>
                       </>
                   )}
               </nav>
               <Sair onClick={DeslogarElimpartoken}>Sair</Sair>
           </Div>

           <Siderbar 
               isOpen={abrirMenu} 
               fecharMenu={FecharMenu} 
               entregasCliente={todasEntregaCLiente} 
               userType="cliente" 
               atualizarentregacliente={MostrasEntregasCLiente}  
           />
       </Headerstyle>
   )
}
