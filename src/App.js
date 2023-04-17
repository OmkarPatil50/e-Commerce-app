import {Home} from './Pages/Home'

import './App.css';
import { Route, Routes, NavLink} from 'react-router-dom';
import { Cart } from './Pages/Cart';
import { WishList } from './Pages/Wishlist';
import { InvalidURL } from './Pages/InvalidURL';
import {ProductDetails} from './Pages/ProductDetails'


function App() {
  return (
    <div className="App">
<h1>ShopNow</h1>
      <nav>
      <NavLink to='/'>Home ||</NavLink>
        <NavLink to='/cart'>My Cart||</NavLink>
        <NavLink to='/wishlist'>My Wishlist</NavLink>

      </nav>
     
     <Routes>
   
      <Route path='/invalid-url' element={<InvalidURL/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:productID' element={<ProductDetails/>}/>

      
   


      
     </Routes>
    </div>
  );
}

export default App;
