
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Product from './routes/Product';
import ProductDetails from './routes/ProductDetails';
import Checkout from './routes/Checkout';
import CheckoutPage from './routes/CheckoutPage';




function App() {
  return (
   <div >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Product" element={<Product/>}/>
      <Route path="/Cart" element={<CheckoutPage/>}/>
      
      <Route path="/product-details/:productId" element={<ProductDetails />} />
      <Route path="/checkout" component={Checkout} />

  

    </Routes>

   
    
        
   </div>
  );
}

export default App;
