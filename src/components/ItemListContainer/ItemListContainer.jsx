import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../Asyncmocks'
import ItemList from '../ItemList/ItemList'
import Hero from '../Hero/Hero'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const {categoria} = useParams()

  useEffect(() =>{
    const funcionProductos = categoria ? getProductsByCategory : getProducts;

    funcionProductos(categoria)
      .then(resp => setProductos(resp))
      .catch(error => console.log(error))

  }, [categoria])
    
  return (
    <>
      {categoria || <Hero></Hero>}
      <section className='py-10 px-15 bg-[#e2dcd0] relative w-full'>
        <ItemList productos={productos}></ItemList>
      </section>
    </>
    
  )
}

export default ItemListContainer