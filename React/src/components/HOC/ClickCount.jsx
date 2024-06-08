import React from 'react'
import WithCounter from './WithCounter'

const ClickCount = ({count,handleCount}) => {
    
  return (
    <>
    <button onClick={handleCount} >clicked {count} of times</button>
    </>
  )
}

export default WithCounter(ClickCount);