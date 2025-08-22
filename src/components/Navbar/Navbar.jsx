import React, { useEffect, useState } from 'react'
import logo from '../../assets/CMB-logo.png'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  const [clases, cambiarClases] = useState('bg-transparent')

  useEffect(()=>{
    const cambiarAlScroll = () =>{
      if (window.scrollY > 75){
        cambiarClases('glass-effect')
      } else{
        cambiarClases('bg-transparent')
      }
    }

    window.addEventListener('scroll', cambiarAlScroll)
  }, [])


  return (
    <header className={`fixed w-full top-0 left-0 ${clases} z-50`}>
        <nav className='px-10 py-4 flex items-center justify-between relative'>
            <ul className="flex gap-3 items-center">
                <li><a className='nav-link px-4 py-2.5 agrandir' href="#">Comprar</a></li>
                <li><a className='nav-link px-4 py-2.5 agrandir' href="#">Nosotros</a></li>
                <li><a className='nav-link px-4 py-2.5 agrandir' href="">Ofertas</a></li>
            </ul>
            <a className='w-17 h-17 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:rotate-360 transition duration-800' href="#"><img className='w-full h-full' src={logo} alt="" /></a>
            <div className='flex gap-4 items-center'>
              <a className='nav-link px-5 py-4.5 agrandir' href="#"><i className="text-2xl fa-solid fa-user"></i></a>
              <CartWidget />
            </div>
        </nav>
    </header>
  )
}

export default Navbar