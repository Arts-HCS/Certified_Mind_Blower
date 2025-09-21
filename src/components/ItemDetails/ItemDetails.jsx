import React, { useState } from "react"


const ItemDetails = ({id, nombre, precio, img, img_back}) => {

  const [buttonColor, setButtonColor] = useState('bg-[#6B6666] pointer-events-none')

  const button = document.getElementById('submitButton');
  const cantidad = document.getElementById('cantidad')

  const controlarCambio = (e) =>{
    let valorInput = e.target.value
    if (valorInput <= 0 || isNaN(valorInput)){
      cantidad.innerText = ""
      button.innerText = "Ingresa al menos una unidad"
      setButtonColor('bg-[#6B6666] pointer-events-none')
    } else if (valorInput > 5){
      cantidad.innerText = ""
      button.innerText = 'Ingresa un máximo de 5 unidades'
      setButtonColor('bg-[#6B6666] pointer-events-none')
    } else{
      let total = parseInt(valorInput) * parseInt(precio)
      cantidad.innerText = `${total} USD`
      button.innerText = 'Agregar al carrito'
      setButtonColor('bg-[#19171A] cursor-pointer pointer-events-auto')
    }
  }

  return (
    <div className="flex items-start justify-center p-10 w-full bg-amber-50">
      <div className="flex-2 w-full h-120 flex gap-x-1.5">
        <figure className="flex-[0.5] bg-[#F2F2F2] h-full border-2 border-gray-800 rounded-[8px] overflow-hidden shadow-[0_4px_11px_rgba(0,0,0,0.4)]">
          <img className="w-full h-full object-contain" src={img} alt={nombre} />
        </figure>
        <figure className="flex-[0.5] bg-[#F2F2F2] h-full border-2 border-gray-800 rounded-[8px] overflow-hidden shadow-[0_4px_11px_rgba(0,0,0,0.4)]">
        <img className="w-full h-full object-contain" src={img_back} alt={nombre} />
        </figure>
      </div>
      <div className="min-h-100 flex-1 flex flex-col items-start justify-start p-5">
        <div className="flex w-full">
          <h4 className="text-[22px]">{nombre}</h4>
          <p className="ml-auto min-w-10 border-l-[3px] text-gray-800 px-3" >ID: {id}</p>
        </div>
        <hr className="my-3 border-[1.5px] border-gray-800 w-full" />
        <p className="text-[19px] text-gray-700">{precio}</p> 
        <hr className="mt-5 mb-3 border-[0.5px] border-gray-700 w-full" />
        <label htmlFor="unidades" className="text-[18px] mb-2 w-full relative">
          Unidades a comprar
          <p id="cantidad" className="absolute right-2 -bottom-10 text-[#19px] font-medium w-auto bg-amber-50"></p>
          </label>
        <input type="number" id="unidades" name="unidades" placeholder="Ingresa la cantidad:" onChange={controlarCambio} className="w-full p-2 border-l-[1.5px] border-b-[1.5px] focus:outline-0 " />
        <button id="submitButton" className={`mt-6 w-full py-3 ${buttonColor} text-[#F3EEE2] text-[17px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:scale-103 transition-all`} type="submit">Agrega al menos una unidad</button>
      </div>
    </div>
  )
}

export default ItemDetails