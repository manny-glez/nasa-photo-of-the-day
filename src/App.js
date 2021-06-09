import React from "react";
import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image"

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Header />

      <Image />
    </div>
  );
}

export default App;
