import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2f3139;
  height: 100vh;
  color: white;
  align-items: center;

  #fotoPerfil {
    width: 200px;
    box-shadow: 0px 0px 17px 4px #9a85d6;
    height: 200px;
    border-radius: 9999px;
    margin-top: 40px;
    margin-bottom: 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 30px;

  span {
    padding: 0.5%;
    font-size: 25px;
    margin-right: -50px;
    margin-bottom: -20px;
    cursor: pointer;

    :hover {
      background-color: #9a85d6;
      border-radius: 9999px;
      opacity: 0.8;
    }
  }
  a {
    color: blue;
    font-size: 25px;
  }

  .sobreTexto {
    text-align: justify;
    font-size: 20px;
    padding-top: 50px;
    padding-right: 300px;
    padding-left: 300px;
    padding-bottom: 100px;
    box-shadow: 0px 0px 17px 0px #9a85d6;
    background-color: white;
    border-radius: 0px;
    color: black;
  }

  .marca {
    color: #9a85d6;
  }

  .icon {
    width: 70px;
    height: 70px;
    border-radius: 0%;
    justify-content: space-evenly;
    margin: 40px;
    background-color: white;
  }

  #contatos{
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
    box-shadow: 0px 0px 17px 0px #9a85d6;
    background-color: white;
    border-radius: 0px;
    color: black;
    
  }

  #imagemContato{
    height: 40px;
    }

  h1 {
    text-align: center;
    padding-top: 50px;
    /* padding-right: 300px;
        padding-left: 300px; */
    padding-bottom: 20px;
    box-shadow: 0px 0px 17px 0px #9a85d6;
    background-color: white;
    border-radius: 0px;
    color: black;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 60px;
  }
`;
export const Footer = styled.div`
  height: 100px;
  background-color: black;
`;
