import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const App = () => {
  return (
    <div className='min-h-screen pt-30'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer></ItemListContainer>}/>
          <Route path='/categoria/:categoria' element={<ItemListContainer />}/>
          <Route path='/detalles/:idItem' element={<ItemDetailContainer/>} />
        </Routes>
      
      </BrowserRouter>
      {/* 
      <Hero />
      <ItemListContainer />
      <ItemDetailContainer /> */}
    </div>
  )
}

export default App