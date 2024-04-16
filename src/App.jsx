import { useState } from 'react'
import { Background } from './components/Background/Background'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'

function App() {
    const [heroCount, setHeroCount] = useState(0);
    let info = [
      {text1: "Dodge Challenger New Version"},
      {text2: "Dodge Charger Older Version"},
      {text3: "Dodge Challenger Old Version"}
    ]

  return (
    <>
      <Background heroCount={heroCount}/>
      <Hero heroCount={heroCount} setHeroCount ={setHeroCount} info={info}/>
      <Navbar heroCount={heroCount} setHeroCount ={setHeroCount}/>
    </>
  )
}

export default App
