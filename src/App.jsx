
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';  
import Eolica from './pages/Eolica';
import Hidreletrica from './pages/Hidreletrica';
import Biomassa from './pages/Biomassa';
import Solar from './pages/Solar';


function App() {
  return (
    <Router>
      <GlobalStyles /> 
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/energia-eolica" element={<Eolica />} /> 
        <Route path="/hidro-eletrica" element={<Hidreletrica />} /> 
        <Route path="/bio-massa" element={<Biomassa />} /> 
        <Route path="/solar-energia" element={<Solar />} /> 
        
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;

