import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [data, setData] = useState();
    function updateData(dataFromChild){
        setData(dataFromChild)
    }
  return (
    <>
    <p>Get Data From Child:{data}</p>
    <Child onUpdate={updateData} />
    </>
  )
}

export default Parent