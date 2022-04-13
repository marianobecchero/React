import './NavBar.css'
import logo from '../../logo.svg'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../../mocks/asyncmock'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
        setCategories(categories)
        })
    }, [])

    return (
        <nav className="NavBar" >
          <Link to='/'>
            <img src={logo} width='50px' alt='logo'/>
          </Link>
          <div className="Categories">
            { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
              className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
            >{cat.description}</NavLink>)}
          </div>
          <CartWidget />
        </nav>
    )



    /*return (
        <nav className='NavBar'>
            <ul>
                <li><img src={logo} width='50px' alt='logo'/></li>
                <li><a>Inicio</a></li>
                <li><a>Notebooks</a></li>
                <li><a>Impresoras</a></li>
                <li><a>Celulares</a></li>
                <li><a>Login</a></li>
                <li><CartWidget /></li>
            </ul>
            
        </nav>
    )*/
}

export default NavBar