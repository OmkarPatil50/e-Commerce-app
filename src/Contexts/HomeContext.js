import { useState } from "react";
import { HomeContext } from "..";


export function ContextProvider({children}){

    const [fetchedProductList , setFetchedProductList] = useState([])

const updateFetchedList = prod =>{
    setFetchedProductList(prod)
}




    return <HomeContext.Provider value={{updateFetchedList , fetchedProductList}}>
        {children}
    </HomeContext.Provider>
}

