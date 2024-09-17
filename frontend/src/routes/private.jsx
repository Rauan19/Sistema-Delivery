import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export const Private = ({ Component }) => {
    const session = JSON.parse(localStorage.getItem("deli"));
    return session?.token ? <Component /> : <Navigate to="/loginClient" />;
}

Private.propTypes = {
    Component: PropTypes.elementType.isRequired
}

export const PrivateDeliMan = ({ Component }) => {
    const session = JSON.parse(localStorage.getItem("deliMan"));
    return session?.token ? <Component /> : <Navigate to="/login/entregador" />;
}

PrivateDeliMan.propTypes = {
    Component: PropTypes.elementType.isRequired
};


