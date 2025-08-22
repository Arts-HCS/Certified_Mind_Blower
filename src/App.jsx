import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <div className='min-h-screen pt-30'>
      <Navbar />
      <Hero />
      <ItemListContainer message="Esta es una página en desarrollo. Este mensaje viene desde App.jsx." />
    </div>
  )
}

export default App