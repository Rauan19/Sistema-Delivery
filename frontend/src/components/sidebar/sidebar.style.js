import styled from "styled-components";

export const Componetsidebar = styled.div`
width: 290px;
height: 510px;
transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
background-color:  rgb(206, 18, 18);
position: fixed;
border-radius:0px 10px;
padding: 20px;
  right: 0;
  transition: transform 0.3s ease;
  top: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-size: 20px;
color: rgb(255, 204, 0);
  font-family: Arial, Helvetica, sans-serif;
 
`

export const BotaoFechar = styled.button`
  background-color: #ff4c4c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e03b3b;
  }

`

export const IMG = styled.img`
margin-top: -40px;
width: 97px;

`

export const Div = styled.div`
display: flex;
width: 100%;


flex-direction: column;
align-items: center;

`

export const CardCarrinho = styled.div`
 width: 100%;
 height: 420px;
 margin-top: 0px;
 display: flex;
 align-items : center;
 overflow-y: auto;

 flex-direction: column;
 border-radius: 10px;
  padding: 10px;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

 &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background:rgb(255, 204, 0);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const Entregascarrinho = styled.div`
 width: 100%;
  max-width: 260px;
  background-color: white;
  border-radius: 8px;
  margin: 10px 0;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;

div{
    
    display: flex;
    justify-content:space-around  ;
}
button {
    background-color: #ff4c4c;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    margin-right: 10px;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: #e03b3b;
    }
  }

  select {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    font-size: 14px;
    margin-top: 5px;
  }
`