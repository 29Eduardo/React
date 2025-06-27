import React from 'react'
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
    <>
     <div className="container my-5">
      <div className="card shadow">
        <div className="card-body p-5">
          <NombreApellido />
          <DatosPersonales />
          <Estudios />
          <CursosRealizados />
          <HabilidadesBlandas />
          <HabilidadesTecnicas />
          <Contacto />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
