
import { Button, Background, Logo, LoginForm, LoginContainer, FooterLink, Title, Description, Input, Footer} from './login.style'
const LoginPage = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      // Adicione aqui a lógica para autenticar o usuário
      alert('Login realizado com sucesso!');
    };
  
    return (
      <Background>
        <LoginContainer>
          <Logo>
            <img src="logo.png" alt="Logo" />
          </Logo>
          <LoginForm onSubmit={handleSubmit}>
            <Title>Bem-vindo de volta</Title>
            <Description>Faça login para continuar</Description>
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Senha" required />
            <Button type="submit">Entrar</Button>
            <Footer>
              <FooterLink href="#">Esqueceu sua senha?</FooterLink>
              <FooterLink href="#">Criar uma conta</FooterLink>
            </Footer>
          </LoginForm>
        </LoginContainer>
      </Background>
    );
  };
  
  export default LoginPage;