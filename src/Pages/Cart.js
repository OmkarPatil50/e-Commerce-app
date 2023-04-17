import { useContext } from "react"
import { HomeContext } from ".."

export function Cart(){
const {cart , removeFromCart} = useContext(HomeContext)

    return  <div>
         <h3>Items in the cart: {cart.length}</h3>
         
    <ul>
        {cart.map((cartItem)=>{
            const {id, name ,quantity , category ,brand} = cartItem
            return <li kwy={id}>
               
                <h3>Name:{name}</h3>
                <p>Category:{category}</p>
                <p>Quantity:{quantity}</p>
                <p>Brand:{brand}</p>
                <button onClick={()=>removeFromCart(id)}>Remove from Cart</button>
                <hr/>
            </li>

        })} 
    </ul>
    </div>
    
}