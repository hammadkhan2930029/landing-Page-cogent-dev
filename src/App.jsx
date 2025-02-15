import { useEffect, useState } from 'react'
import { Navbar } from './components/navbar/navbar'
import { Cards } from './components/cards/cards'
import { FullCard } from './components/fullCard/fullCard'
import { ChooseUs } from './components/chooseUs/chooseUs'
import { Latest } from './components/latestProducts/latestProduct'
import { Faqs } from './components/faqs/faqs'
import { NewsLetter } from './components/newsletter/newsletter'
import { Footer } from './components/footer/footer'
import { Loader } from './components/loader/loader'
import './App.css';


function App() {
  const [count, setCount] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setCount(false)

    }, 2000);

  }, [])

  return (
    <>
      {count ? (
        <Loader />
      ) : (
        <div style={{overflow:'hidden'}}>
          <Navbar />
          <Cards />
          <FullCard />
          <ChooseUs />
          <Latest />
          <Faqs />
          <NewsLetter />
          <Footer />
          </div>
      )}
    </>
  )
}

export default App
