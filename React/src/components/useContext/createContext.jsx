import { createContext } from "react";

let datas = ["America","England","Banana"];
let datas2 = ["Animal","Lake","Labbon"]

export const DataContext = createContext();

export const DataContextProvider = ({children})=>{
    return (
        <DataContext.Provider value={{datas,datas2}}>
            {children}
        </DataContext.Provider>
    )
}