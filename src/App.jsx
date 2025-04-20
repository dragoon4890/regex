import { useState } from "react"

function pp(e){
  pp =document.getElementById("rgx")

  document.getElementById('postfix').innerText =pp.value
}

function con(){
  pp =document.getElementById("rgx").value
  // for now just  + - *
  const precendence={'+':1,'-':1,'*':2,'/':2}
  var operands= []
  var ans=[]
  for ( let i = 0 ; i < pp.length ; i++){
    if (pp[i] in precendence){

        while (operands.length && precendence[pp[i]] <=precendence[operands[operands.length -1]] ){
          ans.push(operands.pop())
        }
        operands.push(pp[i])
    }
    else{
      ans.push(pp[i])
    }
  }

  while (operands.length){
    ans.push(operands.pop())
  }
  var s=""
  ans.forEach(char => {
    s+=char
  });
  document.getElementById('postfix').innerText = s
}


function App() {


  return (
    <>
    <h1>
      Regex Converter
    </h1>

    <input id="rgx" name ="Regex" placeholder="Regex" onChange={pp}></input>
    <label for="Regex">Enter the regex pls</label>
    <p id="postfix"></p>
    <button onClick={con}>Convert to Postfix</button>
    </>
  )
}

export default App
