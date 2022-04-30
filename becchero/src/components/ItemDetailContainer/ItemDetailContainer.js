import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
//import { getProductsById } from '../../mocks/asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = ({ setCart, cart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false) //ANTES DE LA CLASE DE FIREBASE ESTABA EN TRUE
    
    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(firestoreDb, 'products', productId)

        getDoc(docRef)
            .then(response => {
                const product = { id: response.id, ...response.data()}
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [productId])

    //------------ ANTES DE LA CLASE DE FIREBASE ESTABA ESTE USEEFFECT -----------------
    /*useEffect(() => {
        getProductsById(productId).then(item => {
            setProduct(item)          
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId])*/

    if(loading) {
        return(
            <h1>Cargando...</h1> 
        )
    }

    return (
        <div className="ItemDetailContainer" >
            { 
                product ? 
                    <ItemDetail  {...product} setCart={setCart} cart={cart}/> :
                    <h1>El producto no existe</h1> 
            }
        </div>
    )    
}
export default ItemDetailContainer