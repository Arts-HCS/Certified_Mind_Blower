import React, { useEffect, useState } from 'react'
import { getProducts } from '../../Asyncmocks'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  useEffect(() =>{
    getProducts()
      .then(resp =>
        setProductos(resp)
      )
      .catch(error =>{
        console.log(error)
      })
  }, [])
    
  return (
    <section className='mt-5 min-h-250 py-10 px-15 bg-[#e2dcd0] relative w-full'>
      <ItemList productos={productos}></ItemList>
    </section>
  )
}

export default ItemListContainer