import { DataContext } from "./createContext";
import { useContext } from "react";

import React from 'react'

const UseContext = () => {
    const {datas,datas2} = useContext(DataContext);
    console.log(datas)
  return (
    <div>
      {datas.map((val,i)=> <li key={i}>{val}</li> )}
      <br />
      {datas2.map((val,i)=> <li key={i}>{val}</li> )}
    </div>
  )
}

export default UseContext
