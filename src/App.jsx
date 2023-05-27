import React,{useState} from 'react'
import './app.css'
import Input from './components/Input'
import Result from './components/Result';
function App() {

  const [argument,setArgument]=useState([{id:0,arg:'my argument', value:false}]);

const addNewVariable=()=>{
  const obj={
    id:argument.length,
    arg:'my argument',
    value:false
  }
  setArgument([...argument,obj]);
}
console.log(argument,"argument");
  
  return (
    <>
    <div>
      {
        argument.map((ele,index)=>{
          return(
            <Input prop={ele} key={index} arg={argument} setValue={setArgument} />
          )
        })
      }
    </div>
    <br/>
    <button onClick={addNewVariable} style={{marginBottom:"20px" }}>+add arg</button>
<br/>
      <Result arg={argument}/>

    </>
  )
}

export default App