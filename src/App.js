import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css";

// import Explanation from './Components/Explanation/Explanation';


function App() {
  
  const [image, setImage] = useState(null)

  useEffect(() =>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then( response => {
      console.log(response.data)
  
      setImage(response.data.url)
    })
    .catch(err => {
      console.log(err)
    })
  
  } )

  return (
    <div className="App">

      <div className="App-header">
      <h1>Astronomy Photo of The Day</h1>
      </div>

      <div className="img-holder">
        <img src= {image} alt="" />
      </div>

      {/* <Explanation /> */}

      <div className="button">
        <button>click me</button>
      </div>

    </div>
  );
}

export default App;
