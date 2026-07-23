import { useState } from 'react'
import { Header } from './Header';
import { Home } from './Home';
import { Shop } from './Shop';
import { Outlet } from 'react-router';
import './styles/App.css'

function App() {

  const [cartItemsArr, addToCartTrigger] = useState([]);

  return (
    <>
      <Header cartItemsArr={cartItemsArr}/>
      <Outlet context={{addToCartTrigger, cartItemsArr}}/>
    </>
  )
}

export default App
