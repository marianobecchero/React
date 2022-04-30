import './ItemList.css'
//import { memo } from 'react'
import Item from '../Item/Item'

const ItemList = ({products}) => {

    //-------------- ANTES DE LA CLASE DE FIREBASE ESTABA ESTE RETURN -----------------
    /*return(
        <div className='ListGroup' onClick={() => console.log('Hice click en itemlist')}>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>    
    )*/

    return(
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>    
    )
}

//export default memo(ItemList, (oldProps, newProp) => {})
export default ItemList