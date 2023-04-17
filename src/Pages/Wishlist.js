import {HomeContext} from '..'
import {useContext} from 'react'


export function WishList(){
    const {wishList , removeFromWishList} = useContext(HomeContext)

    return  <div>
         <h3>Items in the Wishlist: {wishList.length}</h3>
         
    <ul>
        {wishList.map((wishListItem)=>{
            const {id, name ,quantity , category ,brand} = wishListItem
            return <li kwy={id}>
               
                <h3>Name:{name}</h3>
                <p>Category:{category}</p>
                <p>Quantity:{quantity}</p>
                <p>Brand:{brand}</p>
                <button onClick={()=>removeFromWishList(id)}>Remove from Wishlist</button>
                <hr/>
            </li>

        })} 
    </ul>
    </div>

}