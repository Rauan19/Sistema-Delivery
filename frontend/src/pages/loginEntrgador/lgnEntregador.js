import styled  from 'styled-components';



export const Background = styled.div`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: white;
  background-size: 600% 600%;
  
  .btnEntrega{
  box-shadow: 0px 0px 5px #CE1212 ;
  background-color: transparent;
  font-weight: 600;
 }
`;

export const LoginContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  width: 100px;
  margin-bottom: 20px;
  margin-right: 60px;

  img {
    width: 100%;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  color: #333;
  text-align: center;
`;

export const Description = styled.p`
  margin-bottom: 20px;
  color: #666;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: #CE1212;
    box-shadow: 0 0 5px rgba(206, 18, 18, 0.5);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #CE1212;
  color: #FFCC00;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #a51010;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const FooterLink = styled.a`
  color: #CE1212;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;

  &:hover {
    color: #a51010;
  }
`;