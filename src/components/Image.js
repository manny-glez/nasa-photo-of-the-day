import React, { useState, useEffect } from "react";
import axios from 'axios'

function Image() {

  const [image, setImage] = useState(null)
  const [explanation, setExplanation] = useState(null)
  const [title, setTitle] = useState(null)

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res.data)

        setTitle(res.data.title)
        setImage(res.data.url)
        setExplanation(res.data.explanation)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
    <div className="image">
      <h2>{title}</h2>
      <img src={image} alt="" />
    </div>
    <div className="explained">
      <h3>About The Photo</h3>
      <p>{explanation}</p>
    </div>
    </>
  );
}

export default Image;


