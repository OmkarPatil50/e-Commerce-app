

import { ProductCard } from "../Components/ProductCard"
import { useParams } from "react-router-dom"


export function ProductDetails(){
    const {productID} = useParams()

    return<div>
        <h2>About</h2>
        <div>
            <ProductCard productID={productID}/>
        </div>
    </div>
}