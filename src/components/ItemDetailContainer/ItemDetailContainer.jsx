import { useEffect, useState } from 'react'
import { getAProduct } from '../../Asyncmocks'
import ItemDetails from '../ItemDetails/ItemDetails'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    useEffect(()=>{
      getAProduct(16)
        .then(resp => setProducto(resp))
      
        
    }, [])

  return (
    <section>
      <ItemDetails { ...producto} />
    </section>
    
  )
}

export default ItemDetailContainer