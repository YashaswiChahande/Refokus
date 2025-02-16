import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'

function App() {
  return (
    <div className='w-full h-full bg-zinc-900 font-["satoshi "] text-white'>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
    </div>
  )
}

export default App
