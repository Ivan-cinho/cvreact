import '../src/estilos/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// páginas
import Inicio from './paginas/inicio';
import Formacion from './paginas/formacion';
import Experiencia from './paginas/experiencia';

// componentes y layout
import Header from './componentes/layout/header';
import Nav from './componentes/layout/nav';
import Footer from './componentes/layout/footer';
import WhatsApp from './componentes/WhatsApp';

function App() {
  return (
    <div className='App'>
      <Header nombre='Pablo Iván Bárcena' imagen='cv'/>
      <BrowserRouter>
        <Nav/>
        <main className="holder content">
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="inicio" element={<Inicio/>}/>
            <Route path="formacion" element={<Formacion/>}/>
            <Route path="experiencia" element={<Experiencia/>}/>
          </Routes>
        </main>
      </BrowserRouter>
      <WhatsApp/>
      <Footer/>
    </div>
  );
}

export default App;