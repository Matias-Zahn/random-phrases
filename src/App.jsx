import { useState } from 'react'
import './App.css'
import CitesCards from './components/CitesCards'
import phrases from './db/information.json'
import { getRandomElement } from './utils/randomsIndex'

function App() {

const [phrase, setPhrase] = useState(getRandomElement(phrases))

const handleChangePhrase= () =>{
  setPhrase(getRandomElement(phrases))
  setBackground(getRandomElement(backgroundCss))
}

const backgroundCss= ['bg1', 'bg2', 'bg3', 'bg4'];

const [background, setBackground] = useState(getRandomElement(backgroundCss))

  return (
    <main className= {`content ${background}`} >
      <CitesCards phrase={phrase} handleChangePhrase={handleChangePhrase}/>
    </main>
  )
}

export default App
