import { useContext } from "react"
import { Link} from "react-router-dom"
import { HomeContext } from ".."


export function ProductCard({productID}){

   const{fetchedProductList} = useContext(HomeContext)

    const {id , name ,description , quantity , category , brand} = fetchedProductList.find(({id})=>{
        return id == productID
    })
    
    return <div>

         <div key={id}>
            <h2>Name: {name}</h2>
            <p>Description: {description}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
            <p>Brand: {brand}</p>

            <Link to='/'>See All</Link>
        </div>
   
    </div>
    
}