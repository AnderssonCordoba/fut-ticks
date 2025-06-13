import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Stats from './pages/Stats'; 
import Layout from './layout/Layout';
import Encuentros from './pages/Encuentros'; 
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route element={<Layout />}> 
        <Route path="/stats" element={<Stats />} />
        <Route path="/encuentros" element={<Encuentros />} />
      </Route>
    </Routes>
  );
}

export default App;
