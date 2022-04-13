import { useState, useEffect } from 'react'
import { getProductsById } from '../../mocks/asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    useEffect(() => {
        getProductsById(1).then(item => {
            setProduct(item)          
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProduct()
        })

    }, [])


    return (
        <div className="ItemDetailContainer" >
            <ItemDetail  {...product}/>
        </div>
    )    
}
export default ItemDetailContainer