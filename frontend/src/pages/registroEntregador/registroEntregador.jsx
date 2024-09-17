
import {  useNavigate } from 'react-router-dom';
import {
    RegisterContainer,
    RegisterForm,
    RegisterTitle,
    RegisterInput,
    RegisterButton,
    LoginLink
  } from './style';
  import { apiMan } from '../../services/api';
  import { useState } from 'react';
  import {BlinkBlur} from 'react-loading-indicators'
  const RegisterEntregador = () => {
    const [username, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()


    const handleSubmit = async (e) => {
      setLoading(true)
      e.preventDefault()
      await apiMan.post('/deliveryman', {username, password, name})
      setLoading(false)
      alert("Usuario cadastrado")
    }

    return (
      <RegisterContainer>
        {loading ? (
          <BlinkBlur color="red" size="medium"    />
        ) : (
         <RegisterForm onSubmit={handleSubmit}>
          <RegisterTitle>Crie sua Conta</RegisterTitle>
          <RegisterInput type="text" placeholder="Nome Completo" required value={name} onChange={(e) => setName(e.target.value)} />
          <RegisterInput type="email" placeholder="E-mail" required value={username}  onChange={(e) => setEmail(e.target.value)} />
          <RegisterInput type="password" placeholder="Senha" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <RegisterButton type='submit'>Registrar</RegisterButton>
          <RegisterButton onClick={() => navigate("/login/entregador")} className='btnEntrega' >Sou Cliente</RegisterButton>
          <LoginLink href="/login/entregador">Já tem uma conta? Faça login</LoginLink>
        </RegisterForm>
        )}
       
      </RegisterContainer>
    );
  };
  
  export default RegisterEntregador;
  