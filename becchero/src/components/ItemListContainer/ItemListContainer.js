import './ItemListContainer.css'
import { useState, useEffect } from 'react'
//import { getProducts } from '../../mocks/asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    //const [title, setTitle] = useState() ANTES DE LA CLASE DE FIREBASE ESTABA Y NO ESTABA LA LINEA DE ABAJO
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    //---------------------- ESTABA ANTES DE LA CLASE DE FIREBASE ------------------
    /*useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])*/

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : collection(firestoreDb, 'products')

        getDocs(collectionRef)
            .then(response => {
                const products = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                })
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId]) 

    //----------------- ESTOS 2 IF NO ESTABAN ANTES DE LA CLASE DE FIREBASE -------------
    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(products.length === 0) {
        return <h1>No hay productos</h1>
    }

    //--------------- ESTE RETURN ESTABA ANTES DE LA CLASE DE FIREBASE ----------------
    /*return(
        <div className='ItemListContainer'>
            <h1>{title}</h1>
            <ItemList products={products}/>
        </div>
    )*/

    return(
        <div className='ItemListContainer'>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer