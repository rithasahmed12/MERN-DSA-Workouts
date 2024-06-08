import React from 'react'
import { useRef } from 'react';

const UseRef = () => {
    let ref = useRef();
    let focuesRef = useRef()
    console.log(ref);
    const changeRef = (event)=>{
        ref.current.textContent = event.target.value;
    }
    const handleFocus = ()=>{
        focuesRef.current.focus();
        focuesRef.current.style.backgroundColor = "red" 
    }
  return (
    <>
    <input type="text" ref={focuesRef} onChange={changeRef}  />
    <button onClick={handleFocus}>Focus</button>
    <p ref={ref}></p>
    </>
  )
}

export default UseRef