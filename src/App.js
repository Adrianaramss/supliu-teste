import { createGlobalStyle } from "styled-components";
import { Router } from "./Routes/Router";
import React from "react";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}
`;



function App() {
  return (
    <>
    <GlobalStyle/>
    <Router/>
    </>
  );
}

export default App;
