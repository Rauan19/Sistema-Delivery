
import {
  RegisterContainer,
  RegisterForm,
  RegisterTitle,
  RegisterInput,
  RegisterButton,
  LoginLink
} from './styleregistro';

import { api } from '../../services/api';

import { useState } from 'react';

import {BlinkBlur} from "react-loading-indicators"

const RegisterCLiente = () => {
  const [data, setData] = useState({
    username: "",
    name: "",
    password: "",
  })
 const [loading, setLoading] = useState(false)

  const handleSubmit = async (ev) => {
     setLoading(true)
    ev.preventDefault()

    await api.post('/client', data)
    setLoading(false)
    alert("Usuario criado com sucesso")
  }
  
  return (
    <RegisterContainer>
      {loading ? (
        <BlinkBlur  color="red" size="medium"  />
      ) : (
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterTitle>Crie sua Conta</RegisterTitle>
        <RegisterInput type="text" placeholder="Nome Completo" required value={data.name} onChange={ev => setData({...data, name: ev.target.value})} />
        <RegisterInput type="email" placeholder="E-mail" required value={data.username} onChange={ev => setData({...data, username: ev.target.value})} />
        <RegisterInput type="password" placeholder="Senha" required value={data.password} onChange={ev => setData({...data, password: ev.target.value})} />
        <RegisterButton type='submit'>Registrar</RegisterButton>
       
        <LoginLink href='/loginClient'>Já tem uma conta? Faça login</LoginLink>
      </RegisterForm>
      )}
     
    </RegisterContainer>
  );
};

export default RegisterCLiente;
