import React from 'react'
import { useState } from 'react';

const WithCounter = (OldComponent) => {
  return function enhancedComponent(props){
    const [count,setCount] = useState(0);
    const handleCount = ()=>{
        setCount(prevCount=> prevCount+1);
    }

    return <OldComponent count={count} handleCount={handleCount}/>
  }
}

export default WithCounter