import { PageDeliveryMan } from "../pages/Deliveryman/delivery";
import { PageClient } from "../pages/cliente/cliente";
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "../pages/login/login";
import RegisterCLiente from "../pages/registro/registroClient";
import LoginEntregador from "../pages/loginEntrgador/loginEntregador";
import RegisterEntregador from "../pages/registroEntregador/registroEntregador";
import { Private } from "./private";
import { PrivateDeliMan } from "./private";

export const RoutesComponest = () => {
    return (
        <Routes>
            {/* Rotas públicas */}
            <Route path="/loginClient" element={<LoginPage />} />
            <Route path="/registro/client" element={<RegisterCLiente />} />
            <Route path="/login/entregador" element={<LoginEntregador />} />
            <Route path="/registro/entregador" element={<RegisterEntregador />} />
            
            {/* Rotas privadas */}
            <Route path="/deliveryman" element={<PrivateDeliMan Component={PageDeliveryMan} />} />
            <Route path="/client" element={<Private Component={PageClient} />} />
            
            {/* Rota padrão - redireciona para o login do cliente */}
            <Route path="*" element={<Navigate to="/loginClient" />} />
        </Routes>
    );
};
