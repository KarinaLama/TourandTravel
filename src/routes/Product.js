import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import "./Product.css";

function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched data:', data); 
        setProducts(data.products);
      })
      .catch(console.error);
  }, []);
  
  const handleProductClick = (product) => {
    navigate(`/product-details/${product.id}`, { state: { product } });
  };

  return (
    <div className='header'>
      <h1 className="product-list-title">Product List</h1>
      <div className='product-container'>
        {products.map(product => (
          <div key={product.id} className='product' onClick={() => handleProductClick(product)}>
            <img src={product.images} alt='hi'/>
            <h3>{product.title}</h3>
            <h3>Rs{product.price}</h3>
            <h3>rating:{product.rating}</h3>
           
          </div>
        ))}
      </div>
      <Navbar/>
      <div className='product-preview'>
        
      </div>
    </div>
  );
}

export default Product;
