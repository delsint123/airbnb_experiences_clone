import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import katie_image from "./assets/katie-zaferes.png"

export default function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Card 
            img={katie_image}
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
        />
    </div>
  )
}

