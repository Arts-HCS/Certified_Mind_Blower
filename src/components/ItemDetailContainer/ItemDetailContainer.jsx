import { useEffect, useState } from 'react'
import { getAProduct } from '../../Asyncmocks'
import ItemDetails from '../ItemDetails/ItemDetails'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const {idItem} = useParams()

    useEffect(()=>{
      getAProduct(idItem)
        .then(resp => setProducto(resp))
      
        
    }, [idItem])

  return (
    <section>
      <ItemDetails { ...producto} />
    </section>
    
  )
}

export default ItemDetailContainer