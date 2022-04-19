import './CartWidget.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    return(
        <Link to='/cart'>
            <div className="CartWidget">
                <img src='./images/carrito.png' alt='carrito' className='CartImg' style={{ width: 10, marginRight: 15}}/>
                { getQuantity() }
            </div>
        </Link>
    )
}

export default CartWidget