import styled from 'styled-components';

export const CaixaADD = styled.div`
  display: flex;
  gap: 50px;
  height: 60vh;
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
  margin: 0 auto;

  
`;

export const NovaEntrega = styled.form`
  background-color: white;
  padding: 20px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 90%;

  h2 {
    margin-bottom: 20px;
    color: #333;
  }

  input, textarea {
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    background-color: rgb(206, 18, 18);;
    color:  rgb(255, 204, 0);
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #45a049;
  }


`;



export const Footer = styled.footer`
  background-color: rgb(206, 18, 18);
  color: rgb(255, 204, 0);
  text-align: center;
  padding: 10px;
  height: 44px;
  margin-top: 20px;
  

 
`;

export const LoadingContainer = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
