import './NavBar.css'
import logo from '../../logo.svg'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <ul>
                <li><img src={logo} width='50px' alt='logo'/></li>
                <li><a>Inicio</a></li>
                <li><a>Notebooks</a></li>
                <li><a>Impresoras</a></li>
                <li><a>Celulares</a></li>
                <li><a>Login</a></li>
            </ul>
            
        </nav>
    )
}

export default NavBar