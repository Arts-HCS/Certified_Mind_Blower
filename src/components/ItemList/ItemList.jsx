import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {

  return (
    <div className='w-full min-h-100 flex flex-wrap gap-x-8 gap-y-6 justify-center items-start content-start'>
        {productos.map((articulo) =>(
            <Item key={articulo.id} producto={{ ...articulo}}></Item>
        ))}
    </div>
  )
}

export default ItemList