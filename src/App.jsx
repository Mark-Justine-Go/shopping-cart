import { useState } from 'react'
import { Header } from './Header';
import { Home } from './Home';
import { Shop } from './Shop';
import './styles/App.css'

function App() {

  const api = "https://dummyjson.com/c/cca2-3c8e-4ca2-8bfd";

  return (
    <>
      <Header/>
      <Shop/>
    </>
  )
}

export default App
