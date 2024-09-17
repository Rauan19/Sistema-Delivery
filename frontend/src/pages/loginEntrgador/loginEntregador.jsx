
import { Button, Background, Logo, LoginForm, LoginContainer, FooterLink, Title, Description, Input, Footer} from './lgnEntregador'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { apiMan } from '../../services/api';
import {BlinkBlur} from "react-loading-indicators"

const LoginEntregador = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()


    const handleSubmit = async (event) => {
     setLoading(true)

      event.preventDefault();
      const response = await apiMan.post("/loginDeliveryMan", {username, password})
      const token = response?.data?.token
      const dedodedtoken = JSON.parse(atob(token.split('.')[1]))
      const userId = dedodedtoken.sub
      
      localStorage.setItem("deliMan", JSON.stringify({token, subject: userId}))
      navigate("/deliveryman")
     setLoading(false)
      alert('Login realizado com sucesso!');
    };
  
    return (
      <Background>
        <LoginContainer>
          {loading ? (
            <BlinkBlur  color="red" size="medium"  />
          ) : (
            <>
         <Logo>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/008/492/069/small_2x/delivery-cartoon-illustration-png.png" alt="Logo" />
          </Logo>
          <LoginForm onSubmit={handleSubmit}>
            <Title>Bem-vindo de volta</Title>
            <Description>Faça login para continuar</Description>
            <Input type="email" placeholder="Email" required value={username} onChange={(event) => setUsername(event.target.value)}/>
            <Input type="password" placeholder="Senha" required value={password} onChange={(event) => setPassword(event.target.value)}/>
            <Button type="submit">Entrar</Button>
            <Button className='btnEntrega' onClick={() => navigate('/loginClient')} >Sou Cliente</Button>
            <Footer>
              <FooterLink href="#">Esqueceu sua senha?</FooterLink>
              <FooterLink href="/registro/Entregador">Criar uma conta</FooterLink>
            </Footer>
          </LoginForm>
            </>
            
          )}

        </LoginContainer>
      </Background>
    );
  };
  
  export default LoginEntregador;