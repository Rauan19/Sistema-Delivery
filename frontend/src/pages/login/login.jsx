import { Button, Background, LoginForm, LoginContainer, FooterLink, Title, Description, Input, Footer } from './login.style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';
import {BlinkBlur} from 'react-loading-indicators'

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    
    try {
      const response = await api.post("/login", { username, password });
      const token = response?.data?.token;

      if (token) {
        // Decode the token to get the userId
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        console.log('Decoded Token:', decodedToken);
        const userId = decodedToken.sub; // `sub` is the key we are using for user ID in the token

        localStorage.setItem("deli", JSON.stringify({ token, subject: userId }));
        navigate("/client");
        alert('Login realizado com sucesso!');
      } else {
        alert('Erro ao obter token');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login');
    } finally {
      setLoading(false)
    }
  };



  return (
    <Background>
      <LoginContainer>
        {loading ?  (
          <BlinkBlur color="red" size="medium" / >
        ) : (
       <LoginForm onSubmit={handleSubmit}>
          <Title>Bem-vindo de volta</Title>
          <Description>Faça login para continuar</Description>
          <Input
            type="email"
            placeholder="Email"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button type="submit">Entrar</Button>
          <Button className='btnEntrega' onClick={() => navigate('/login/entregador')}>Sou Entregador</Button>
          <Footer>
            <FooterLink href="#">Esqueceu sua senha?</FooterLink>
            <FooterLink href="/registro/client">Criar uma conta</FooterLink>
          </Footer>
        </LoginForm>
        )}
       
      </LoginContainer>
    </Background>
  );
};

export default LoginPage;
