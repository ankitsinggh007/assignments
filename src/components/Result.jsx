import React, { useState } from 'react'

function Result({arg}) {

    const optionSet=arg.map(ele=>ele.arg);

    const [Func, setFunc] = useState();

    const [option,setOption]=useState([[true,false],
    ...optionSet
    ],['and'],['or']);

    console.log(optionSet,"set");

const handlechange=(e)=>{
    console.log(e.target.value);
}

const [parentOption,setParentOption]=useState(['...select','constant','argument','and','or'])


  return (
    <div>

      <select name="" id="" onChange={handlechange}>
      {
        parentOption.map((ele,index)=>{
                return(
      <option value={ele} selected={ele=='...select'} disabled={ele=='...select'}>{ele}</option>

                )
        })
      }

      </select>

      <button style={{marginLeft:'10px' }}>X</button>


      </div>
  )
}

export default Result