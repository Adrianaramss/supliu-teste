import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adicionar from '../Pages/Adicionar/Adicionar';
import  HomePage  from '../Pages/HomePage/HomePage';
import Deletar from '../Pages/deletar/deletar';

export const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/adicionar" element={<Adicionar/>} />
      <Route path="/deletar" element={<Deletar/>} />

    </Routes>
  </BrowserRouter>
  );
};

