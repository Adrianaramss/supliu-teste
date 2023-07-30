import styled from "styled-components";

export const ImagemBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Gradiente = styled.div`
  width: 60%;
  height: 70vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.9)
  );
`;

export const Texto = styled.p`
  font-size: 20px;
  color: #696969;
  margin-right: 740px;
  margin-top: 150px;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 18px;
  border: 1px solid #ccc;
  width: 750px;
  margin-top: 10px;
  border-radius: 30px;
`;

export const Botao = styled.button`
  font-size: 16px;
  padding: 18px 55px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 20px;
  margin-left: 50px;
`;

export const Buttoncriaralbumefaixa = styled.button`
  font-size: 16px;
  padding: 12px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 20px;
  margin-right: auto;
`;

export const Listaalbumefaixa = styled.div`
  margin-top: 40px;
  margin-bottom: 250px;
  margin-right: 550px;
  font-family: "Roboto";
`;

export const Album = styled.div`
  margin-bottom: 20px;
`;

export const Faixas = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  text-align: left;

  th,
  td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }

  th {
    font-weight: bold;
  }
`;

export const HeaderGradiente = styled.div`
  width: 60%;
  height: 12vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  margin-top: 80px;

  .logo {
    width: 170px;
    height: auto;
    margin-right: 700px;
  }

  h1 {
    font-size: 34px;
    margin: 0;
    font-family: "Noto Sans";
    font-style: normal;
    color: #696969;
  }

  @media (max-width: 1400px) {
    flex-wrap: wrap;
    justify-content: center;
    .logo {
      width: 50%;
      max-width: 100px;
      margin-right: 400px;
      margin-bottom: 10px;
    }

    h1 {
      font-size: 2vw;
      text-align: center;
    }
  }
`;