import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css";
import StyledButton from "./components/Button.js"
import Explanation from './components/Explanation/Explanation.js';

function App() {
  
  const [image, setImage] = useState(null)

  const [explanation, setExplanation] = useState('Loading...')

  useEffect(() =>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=KYYFahvlZlbNyGJ0AIDQmuVyOPCofi7ekfDnuyvL')
    .then( response => {
      console.log(response.data)
  
      setImage(response.data.url)
      
      setExplanation(response.data.explanation)
    })
    .catch(err => {
      console.log(err)
    })
  
  } )

  return (
    <div className="App">

      <div className="App-header">
      <h1>NASA Photo of The Day</h1>
      </div>

      <div className="img-holder">
        <img src= {image} alt="" />
      </div>

      <Explanation explanation={explanation} />

      <StyledButton />

    </div>
  );
}

export default App;
