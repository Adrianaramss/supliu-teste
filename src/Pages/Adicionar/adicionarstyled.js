import styled from "styled-components";

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  font-family: "Roboto";

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 16px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  z-index: 1;
`;


export const BackButtondeletar = styled.button`
  position: absolute;
  top: 70px;
  left: 20px;
  font-size: 16px;
  padding: 10px 20px;
  background-color: #FF0000;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  z-index: 1;
`;





export const Informaçõesadicionaralbum = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  z-index: 1;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    font-family: "Roboto";

  }

  input {
    font-size: 16px;
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    font-size: 16px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 20px;
  }
`;
 
