import './ItemDetail.css'
import { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Counter from '../Counter/Counter'
import CartContext from '../../context/CartContext'
import { useNotification } from '../../notification/Notification'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const { addItem, isInCart } = useContext(CartContext)

    const { setNotification } = useNotification()

    const handleAdd = (count) => {
        const productObj = {
            id, name,price, quantity: count
        }

        addItem(productObj)
        setNotification('error', `Se agregaron ${count} ${name} correctamente`)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                { 
                    isInCart(id) 
                        ? <Link to='/cart' className='Option'>Ir al carrito</Link> 
                        : <Counter onAdd={handleAdd} stock={stock}/> 
                } 
            </footer>
        </article>
    )
}

export default ItemDetail