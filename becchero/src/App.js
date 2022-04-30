import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Form from './components/Form/Form';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import { NotificationProvider } from './notification/Notification';

const App = () => {

  return (

  <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/form' element={<Form />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </BrowserRouter> 
        </CartContextProvider>
      </NotificationProvider>
  </div>

    
);






  /*const props = {
    title: 'Becchero Mariano',
    props:'1'
  }*/

  /*return (
    <div className="App">
      <NavBar/>
      {/*<ItemListContainer {...props}/> /}
      {/*<MLListContainer /> /}
      <ItemDetailContainer />
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> /}
      
    </div>
  );*/
}

export default App;
