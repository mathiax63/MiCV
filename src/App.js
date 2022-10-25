import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Head from './components/layout/Head';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Principal from './components/pages/Principal';
import  PaginasInfo  from './components/pages/PaginasInfo';
import DiplomasInfo from './components/pages/DiplomasInfo';



function App() {
  return (
    <div >
      <Head/>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="PaginasInfo" element={<PaginasInfo/>}/>
        <Route path='DiplomasInfo' element={<DiplomasInfo/>}/>
        </Routes>
        </BrowserRouter>
      <Footer/>
     
    </div>
  );
}

export default App;
