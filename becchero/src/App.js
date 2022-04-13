//import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
//import ItemListContainer from './components/ItemListContainer/ItemListContainer'
//import MLListContainer from './components/MLListContainer/MLListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  /*const props = {
    title: 'Becchero Mariano',
    props:'1'
  }*/

  return (
    <div className="App">
      <NavBar/>
      {/*<ItemListContainer {...props}/> */}
      {/*<MLListContainer /> */}
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
      </header>*/}
      
    </div>
  );
}

export default App;
