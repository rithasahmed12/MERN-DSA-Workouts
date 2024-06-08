import React from 'react'
import WithCounter from './WithCounter'

const HoverCount = ({count,handleCount}) => {
  return (
    <button onMouseOver={handleCount} >hover {count} no times</button>
  )
}

export default WithCounter(HoverCount);