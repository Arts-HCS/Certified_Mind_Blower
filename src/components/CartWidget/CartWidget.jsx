import React from 'react'

const CartWidget = () => {
  return (
    <a className='px-6 py-2.5 text-[#19171A] rounded-2xl bg-[#F2EEE2] flex flex-col justify-center items-center hover:bg-[#e2dabc] hover:shadow-[0_0_20px_#e2dabc3f] transition' href="#">
      <p className='text-xl agrandir'>0</p>
      <i className="text-xl fa-solid fa-cart-shopping"></i>
    </a>
  )
}

export default CartWidget