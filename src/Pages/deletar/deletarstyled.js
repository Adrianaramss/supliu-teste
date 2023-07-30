import styled from "styled-components";


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
    margin-bottom: 40px;
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
    margin-left: 80px;
    margin-bottom: 30px;

  }
  p{
    margin-bottom: 30px;
 
  }
`;