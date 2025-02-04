import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Cards } from './components/cards/cards'
import { FullCard } from './components/fullCard/fullCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Cards/>
      <FullCard/>
    </>
  )
}

export default App
