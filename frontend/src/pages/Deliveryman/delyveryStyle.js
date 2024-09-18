import styled from "styled-components";

export const CardsEntrega = styled.div`
width: 90%;
background-color: white;
height: 110px;
border-radius: 8px;
display: flex;
padding: 10px 10px;
justify-content:space-between ;
margin-top: 10px;
font-family:  Arial, Helvetica, sans-serif;
margin-left: 10px;
p{
    display: flex;
    gap: 5px;
}
`
export const ContainerEntrega = styled.div`
width: 100%;

height: 63vh;
overflow-y: auto;
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

export const Butao = styled.button`
background-color: rgb(206, 18, 18);
border: none;
margin-left: 5px;
font-weight: 700;
cursor: pointer;
color: rgb(255, 204, 0);
font-family:Arial, Helvetica, sans-serif ;
border-radius: 6px;
padding: 8px;
`

export const LOACENTER = styled.div`
width: 100%;
height: 90vh;
display: flex;
align-items: center;
justify-content: center;
`