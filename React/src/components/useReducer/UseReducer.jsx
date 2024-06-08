import React from 'react'
import { useReducer } from 'react'

let ACTION = {
    INCREMENT:"INCREMENT",
    DECREMENT:"DECREMENT"
}
    

const UseReducer = () => {
    const [state,dispatch] = useReducer(reducer,{count:0})

    function reducer(state,action){
        switch(action.type){
            case ACTION.INCREMENT:
                return {
                    count:state.count+1
                }
            case ACTION.DECREMENT:
                return {
                    count:state.count-1
                }    
            default:
                return{
                 count:state.count
                }
                    
        }
    }

    const handleIncrement =()=>{
        dispatch({type:ACTION.INCREMENT});
    }

    const handleDecrement = ()=>{
        dispatch({type:ACTION.DECREMENT})
    }
    
  return (
    <>
    <h1>Count:{state.count}</h1>
     <button onClick={handleIncrement}>Add</button>
     <button onClick={handleDecrement}>substract</button>
    </>
  )
}

export default UseReducer