import React, { useEffect, useState } from 'react'

function Input({prop,setValue,arg}) {


const [property, setProperty] = useState(prop);


  const handleEvent=(e)=>{


    if(e.target.name==='name'){
      setProperty({
        ...property,arg:e.target.value
      });
    }
    else{
      setProperty({
        ...property,value:e.target.value
      });

    }

    

  }
  useEffect(()=>{
    SetProperty();
  },[property])

  const SetProperty=()=>{
    const obj=[...arg];
    
    obj[property.id]=property;

    setValue(obj);
  }



  return (
    <div><input type='text'id={prop.id} name='name' defaultValue={prop.arg} onChange={handleEvent}   />
    <select id={prop.id} name='value' defaultValue={prop.value} onChange={handleEvent} >
      <option value={false}  >false</option>
      <option value={true} >true</option>
    </select></div>
  )
}

export default Input