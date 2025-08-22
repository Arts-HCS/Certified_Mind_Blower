import React from 'react'

const ItemListContainer = ({message}) => {

    
  return (
    <section className='mt-5 min-h-250 pt-30 px-30 bg-[linear-gradient(to_bottom,#999790,#fff)] relative'>
        <div className="absolute left-0 -top-5 w-full h-5 bg-[#19171A] blur-[20px] pointer-events-none"></div>
        <p className='text-2xl'>{message}</p>
    </section>
  )
}

export default ItemListContainer