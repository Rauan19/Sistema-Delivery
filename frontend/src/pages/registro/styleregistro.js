import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #cc1212;

  .btnEntrega{
  box-shadow: 0px 0px 5px #CE1212 ;
  background-color: transparent;
  font-weight: 600;
 }
`;

export const RegisterForm = styled.form`
  background-color:  rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 360px;
  text-align: center;
`;

export const RegisterTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

export const RegisterInput = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

export const RegisterButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  background-color: #cc1212;
  color: #ffcc00;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a30d0d;
  }
`;

export const LoginLink = styled.a`
  display: block;
  margin-top: 20px;
  color: #cc1212;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;
