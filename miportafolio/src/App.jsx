import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NombreApellido from './components/NombreApellido'
import DatosPersonales from './components/DatosPersonales'
import Contacto from './components/Contacto'
import CursosRealizados from './components/CursosRealizados'
import Estudios from './components/Estudios'
import HabilidadesBlandas from './components/HabilidadesBlandas'
import HabilidadesTecnicas from './components/HabilidadesTecnicas'
import './components/Estilo.css'

function App() {

  return (
  <Router>
      <div className="container my-5">
        <nav className="mb-4">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/datos">Datos Personales</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/estudios">Estudios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cursos">Cursos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blandas">Habilidades Blandas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tecnicas">Habilidades Técnicas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>

        <div className="card shadow">
          <div className="card-body p-5">
            <Routes>
              <Route path="/" element={<NombreApellido />} />
              <Route path="/datos" element={<DatosPersonales />} />
              <Route path="/estudios" element={<Estudios />} />
              <Route path="/cursos" element={<CursosRealizados />} />
              <Route path="/blandas" element={<HabilidadesBlandas />} />
              <Route path="/tecnicas" element={<HabilidadesTecnicas />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    );
}

export default App
