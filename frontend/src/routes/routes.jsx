import { PageDeliveryMan } from "../pages/Deliveryman/delivery";
import { PageClient } from "../pages/cliente/cliente";
import {Routes, Route} from 'react-router-dom'
import LoginPage from "../pages/login/login";
import RegisterCLiente from "../pages/registro/registroClient";
import LoginEntregador from "../pages/loginEntrgador/loginEntregador";
import RegisterEntregador from "../pages/registroEntregador/registroEntregador";


export const RoutesComponest = () => {
    return (
        <Routes>
            <Route path="/loginClient" element={<LoginPage/>} />
            <Route  path="/registro/client" element={<RegisterCLiente/>} />

            <Route   path="/login/entregador" element={<LoginEntregador/>} />
            <Route  path="/registro/Entregador" element={<RegisterEntregador/>} />

            <Route path='/deliveryman' element={<PageDeliveryMan/>} />
            <Route  path="/client"  element={<PageClient/>}/>
        </Routes>
    )
}