import { useState } from 'react'
import { Header } from './Header';
import { Home } from './Home';
import './styles/App.css'

function App() {

  const api = "https://dummyjson.com/c/cca2-3c8e-4ca2-8bfd";

  return (
    <>
      <Header/>
      <Home/>
    </>
  )
}

export default App
