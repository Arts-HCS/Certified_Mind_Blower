import React from "react"


const ItemDetails = ({id, nombre, precio, img, img_back}) => {

  return (
    <section className="flex items-center justify-center p-10 w-full bg-amber-50">
      <div className="flex-2"></div>
      <div className="min-h-100 flex-1 flex flex-col items-start justify-start p-5">
        <h4>{nombre}</h4>
        
        <hr className="my-2 border-1 border-gray-800 w-full" />
        <p>{precio}</p> 
      </div>
    </section>
  )
}

export default ItemDetails