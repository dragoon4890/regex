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
  var temp=""
  for ( let i = 0 ; i < pp.length ; i++){
    if (pp[i] in precendence){
        if (temp){
          ans.push(temp)
          temp=""
        }

        while (operands.length && precendence[pp[i]] <=precendence[operands[operands.length -1]] ){
          ans.push(operands.pop())
        }
        operands.push(pp[i])
    }
    else{
      temp +=pp[i]
    }
  }

  if (temp){
    ans.push(temp)
  }

  while (operands.length){
    ans.push(operands.pop())
  }
  var s=""
  ans.forEach(char => {
    s+=char+" "
  });
  document.getElementById('postfix').innerText = s
}


function App() {


  return (
    < >
    <h1>
      Regex Converter
    </h1>

    <input id="rgx" name ="Regex" placeholder="Regex" onChange={pp}></input>
    <label >Enter the regex pls</label>
    <p id="postfix"></p>
    <button onClick={con}>Convert to Postfix</button>
    </>
  )
}

export default App
