import React from 'react'

const CartButton = ({position}) => {
  return (
    <div className={`absolute ${position} w-10 h-10 flex items-center justify-center rounded-full bg-[#f7f2ec] shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-115 transition-all`}>
        <i className="fa-solid fa-plus text-[#19171A] text-2xl"></i>
    </div>
  )
}

export default CartButton