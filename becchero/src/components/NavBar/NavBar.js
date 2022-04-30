import './NavBar.css'
import logo from '../../logo.svg'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
//import { getCategories } from '../../mocks/asyncmock'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection, /*orderBy,*/ query } from 'firebase/firestore'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    //--------------- ESTE USEREFFECT ESTABA ANTES DE LA CLASE DE FIREBASE ------------
    /*useEffect(() => {
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
    )*/

    useEffect(() => {
      getDocs(query(collection(firestoreDb, 'categories')/*, orderBy("order", "asc")*/)).then(response => {
        const categories = response.docs.map(doc => {
          return { id: doc.id, ...doc.data()}
        })
        setCategories(categories)
        console.log(categories)
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
}

export default NavBar