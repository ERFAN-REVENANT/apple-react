import React from 'react'
import NavBar from './assets/components/NavBar'
import Highlights from './assets/components/Highlights'
import Hero from './assets/components/Hero'
import "../public/tailwind.css"

const App = () => {
  return (
    <main className='bg-black'>
      <NavBar></NavBar>
      <Hero></Hero>
      <Highlights></Highlights>
    </main>
  )
}

export default App