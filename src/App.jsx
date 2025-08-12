import { useState } from 'react'
import './App.css'

function MyButton(){
  const numero = 10 + 5;
  const usuario = {
    nombre: 'Juan',
    apellido: 'Perez'
  }

  function formatearNombre(persona){
    return `${persona.nombre} ${persona.apellido}`
  }

  return (
    <div className='hero-section'>
      <button>I'm a button!</button>
      <div className='card'>
        <h3 className="card-title">This is a title</h3>
        <p className="card-text">This is some text</p>
        <p className='card-text'>The sum result is: {formatearNombre(usuario)}</p>
      </div>
    </div>

  )
}

export default MyButton
