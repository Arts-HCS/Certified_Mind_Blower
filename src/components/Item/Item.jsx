import React from 'react'
import CartButton from '../CartButton/CartButton'

const Item = ({producto}) => {
    
  return (
    <div className='w-60 h-100 flex flex-col  overflow-hidden rounded-1xl shadow-[1px_6px_13px_rgba(0,0,0,0.5)] bg-[#F2F2F2] rounded-b-[7px] transition-all hover:scale-102'>
      <figure className='w-full h-[75%] border-1 border-b-0 border-gay-700 relative'>
        <img className=' w-full h-full object-contain' src={producto.img} alt="Image example"/>
        <CartButton position='bottom-2 right-3' productID ={producto.id} />
      </figure>
      <div className='flex-1 p-3 bg-[#141313] relative'>
        <h3 className='text-[13px] font-light text-white'>{producto.nombre}</h3>
        <p className='agrandir text-[13px] text-white absolute bottom-3 left-3'>{producto.precio}</p>
      </div>
    </div>
  )
}

export default Item