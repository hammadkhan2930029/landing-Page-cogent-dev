import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Cards } from './components/cards/cards'
import { FullCard } from './components/fullCard/fullCard'
import { ChooseUs } from './components/chooseUs/chooseUs'
import { Latest } from './components/latestProducts/latestProduct'
import { Faqs } from './components/faqs/faqs'
import { NewsLetter } from './components/newsletter/newsletter'
import { Footer } from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Cards />
      <FullCard />
      <ChooseUs />
      <Latest />
      <Faqs/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default App
