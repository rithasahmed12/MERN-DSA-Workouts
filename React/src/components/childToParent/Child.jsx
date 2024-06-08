import React from 'react'

const Child = (props) => {
    let data = "Data from child hihih"
    function sentData(){
        props.onUpdate(data)
    }
  return (
    <button onClick={sentData}>Sent data to parent</button>
  )
}

export default Child