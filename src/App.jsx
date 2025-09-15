import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const App = () => {
  return (
    <div className='min-h-screen pt-30'>
      <Navbar />
      <Hero />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  )
}

export default App