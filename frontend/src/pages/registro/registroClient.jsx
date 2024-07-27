
import {
  RegisterContainer,
  RegisterForm,
  RegisterTitle,
  RegisterInput,
  RegisterButton,
  LoginLink
} from './styleregistro';

const RegisterCLiente = () => {
  return (
    <RegisterContainer>
      <RegisterForm>
        <RegisterTitle>Crie sua Conta</RegisterTitle>
        <RegisterInput type="text" placeholder="Nome Completo" required />
        <RegisterInput type="email" placeholder="E-mail" required />
        <RegisterInput type="password" placeholder="Senha" required />
        <RegisterButton>Registrar</RegisterButton>
        <RegisterButton>Sou Cliente</RegisterButton>
        <LoginLink href="/login">Já tem uma conta? Faça login</LoginLink>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default RegisterCLiente;
