import React from 'react'
import corazon from '../../assets/corazon-beige.png'

const words1 = [
  "Iconic",
  "Dreamy",
  "Lowkey",
  "Effortless",
  "Ethereal",
  "Classic",
  "Effervescent",
  "Minimal",
]

const words2 = [
  "Bold",
  "Vibrant",
  "Chill",
  "Sleek",
  "Retro",
  "Funky",
  "Elegant",
  "Fresh",
]

const Hero = () => {
  return (
    <section className='w-full pt-15 pb-10  flex items-center justify-center relative flex-col overflow-hidden'>
      <h1 className='text-[#F2EEE2] flex flex-col items-center'>
        <span className='agrandir mb-9 text-6xl'>CERTIFIED</span>
        <span
          className='tan text-9xl mb-6 text-transparent'
          style={{ WebkitTextStroke: "1px #F2EEE2" }}
        >
          MIND
        </span>
        <span className='tan text-9xl tracking-wider'>BLOWER</span>
      </h1>

      <img
        className='w-17 h-17 absolute top-40 right-20 animate-[spin_6s_linear_infinite]'
        src={corazon}
      />
      <img
        className='w-17 h-17 absolute top-20 left-20 animate-[spin_5.2s_linear_infinite]'
        src={corazon}
      />
      <img
        className='w-17 h-17 absolute bottom-65 left-60 animate-[spin_4s_linear_infinite]'
        src={corazon}
      />

      <div className='absolute bg-[linear-gradient(200deg,#19171A,#F2EEE2)] w-full h-55 rounded-full -bottom-45 left-0 blur-[80px] pointer-events-none'></div>

      <div className="relative mt-22 w-full h-12 overflow-hidden">
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{
            display: "inline-flex",
            animation: "marquee 20s linear infinite"
          }}
        >
          {words1.concat(words1).map((word, i) => (
            <div
              key={i}
              className="button agrandir px-4 py-2.5  hover:shadow-2xl transition inline-block"
            >
              {word}
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-3 w-full h-10 overflow-hidden">
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{
            display: "inline-flex",
            animation: "marquee 25s linear infinite reverse"
          }}
        >
          {words2.concat(words2).map((word, i) => (
            <div
              key={i}
              className="button agrandir px-4 py-2.5  hover:shadow-2xl transition inline-block"
            >
              {word}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-20%); }
          }
        `}
      </style>
    </section>
  )
}

export default Hero
