import React from 'react'
import { useRef } from 'react'
import ChildRef from './ChildRef';

const ForwardRef = () => {
    let ref = useRef();
    const handleFocus = ()=>{
      ref.current.focus();
      ref.current.style.backgroundColor = 'yellow'
    }
  return (
    <>
      <ChildRef ref={ref} />
      <button onClick={handleFocus}></button>
    </>
  )
}

export default ForwardRef