import { useState } from "react";
import { HomeContext } from "..";


export function ContextProvider({children}){

    const [fetchedProductList , setFetchedProductList] = useState([])

    const [cart ,setCart] = useState([])
    const [wishList ,setWishList] = useState([])


const updateFetchedList = prod =>{
    setFetchedProductList(prod)
}

const updateCartList=(item)=>{
    setCart(()=>{
        return cart.map(cartItem=>cartItem.id).includes(item.id)?[...cart]:[...cart , item]
    })
}


const updateWishList=(item)=>{
    setWishList(()=>{
        return wishList.map(cartItem=>cartItem.id).includes(item.id)?[...wishList]:[...wishList , item]
    })
}

const removeFromCart = key =>{
    setCart(()=>{
        return cart.filter(cartItem=>{
            return cartItem.id!=key
        })
    })
}

const removeFromWishList = key =>{
    setWishList(()=>{
        return wishList.filter(wishListItem=>{
            return wishListItem.id!=key
        })
    })
}


    return <HomeContext.Provider value={{updateFetchedList , fetchedProductList , updateCartList , cart , removeFromCart ,removeFromWishList , updateWishList , wishList}}>
        {children}
    </HomeContext.Provider>
}

