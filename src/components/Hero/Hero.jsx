import React from 'react'
import corazon from '../../assets/corazon-beige.png'

const Hero = () => {
  return (
    <section className='w-full py-15 flex items-center justify-center relative flex-col'>
        <h1 className='text-[#F2EEE2] flex flex-col items-center'>
           <span className='agrandir mb-9 text-6xl'>CERTIFIED</span> <span className='tan text-9xl mb-6 text-transparent' style={{ WebkitTextStroke: "1px #F2EEE2" }}>MIND</span> <span className='tan text-9xl tracking-wider'>BLOWER</span>
        </h1>
        <img className='w-17 h-17 absolute top-40 right-20 animate-[spin_6s_linear_infinite]' src={corazon} />
        <img className='w-17 h-17 absolute top-20 left-20 animate-[spin_5.2s_linear_infinite]' src={corazon} />
        <img className='w-17 h-17 absolute bottom-45 left-60 animate-[spin_4s_linear_infinite]' src={corazon} />
        <div className=' absolute bg-[linear-gradient(200deg,#19171A,#F2EEE2)] w-full h-55 rounded-full -bottom-45 left-0 blur-[80px] pointer-events-none'></div>
        <div className="mt-20 w-full h-10 flex items-center justify-center gap-5">
          <button className='button agrandir hover:-translate-y-1.5 hover:scale-105 hover:shadow-2xl transition'>Hoodies</button>
          <button className='button agrandir hover:-translate-y-1.5 hover:scale-105 hover:shadow-2xl transition'>Pants</button>
          <button className='button agrandir hover:-translate-y-1.5 hover:scale-105 hover:shadow-2xl transition'>Shorts</button>
          <button className='button agrandir hover:-translate-y-1.5 hover:scale-105 hover:shadow-2xl transition'>Playeras</button>
          <button className='button agrandir hover:-translate-y-1.5 hover:scale-105 hover:shadow-2xl transition'>Chamarras</button>
        </div>
    </section>
  )
}

export default Hero