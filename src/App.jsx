import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Navbar/Home'
import Analytics from './components/Navbar/Analytics'
import Newsletter from './components/Navbar/Newsletter'
import Cards from './components/Navbar/Cards'
import Footer from './components/Navbar/footer'

const App = () => {
  return (
    <main className='overflow-hidden'>     
     <Navbar/>
     <Home/>
     <Analytics/>
     <Newsletter/>
     <Cards/>
     <Footer/>
    </main>
  )
}

export default App
