import { useState } from 'react'
import React from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Saludo from './components/saludo'
import Menu from './components/Menu'
import Nosostro from './components/Nosotros'
import './components/Estilo.css'
function App() {
  return (
    <>
      <h1>Curriculum Vitae</h1>
      <Menu></Menu>      
      <Saludo nombre={"Eduardo"}></Saludo>
      <div class="container">
      <img src="carro.jpg" alt="" />
      <img src="carro1.jpg" alt="" />
      </div>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae culpa, quos asperiores quia reprehenderit reiciendis totam dolorem iusto sunt est saepe accusantium cupiditate ducimus ratione laudantium vero dolorum corrupti?</h3>
      <Nosostro></Nosostro>

    </>
  )
}

export default App
