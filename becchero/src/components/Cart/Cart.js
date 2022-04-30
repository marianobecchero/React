import './Cart.css'
import { useContext, useState } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'


const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, clearCart, getTotal, getQuantity } = useContext(CartContext)  

   

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                name: 'Mariano Becchero',
                phone: '3534110019',
                email: 'mbecchero@gmail.com'
            },
            total: getTotal(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                console.log(`El id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }

    if(getQuantity() === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return (     
        <div>
            <h1>Cart</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${getTotal()}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <button onClick={() => createOrder()} className="Button">Generar Orden</button>

        </div>
    )
}

export default Cart

//------------------ ANTES DE USAR FIREBASE ---------------------------
/*import { useContext } from "react"
import CartContext from "../../context/CartContext"

const Cart = () => {
    const { cart, removeItem, getTotal } = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <h1>No hay productos</h1>
        )
    }

    return (
        <>
        <h1>Cart</h1>
        <ul>
            {
                cart.map(prod => <li key={prod.id}>{prod.name}  cantidad: {prod.quantity} precio uni: {prod.price}  subtotal: {prod.quantity * prod.price} <button onClick={() => removeItem(prod.id)}>X</button></li>)
            }   
        </ul>
        <h3>Total: ${getTotal()}</h3>
        </>
    )
}

export default Cart*/