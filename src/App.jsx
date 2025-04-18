import { useState } from "react"

function pp(e){
  pp =document.getElementById("rgx")

  console.log( pp.value )
}


function App() {


  return (
    <>
    <h1>
      Regex Converter
    </h1>

    <input id="rgx" name ="Regex" placeholder="Regex" onChange={pp}></input>
    <label for="Regex">Enter the regex pls</label>
    </>
  )
}

export default App
