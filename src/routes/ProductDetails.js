import React, { useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Checkout from './Checkout';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  
  const productDetailsRef = useRef(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/product/${productId}`)
      .then(res => res.json())
      .then(data => {
        console.log('Fetched product details:', data);
        setProduct(data); 
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, [productId]);
  
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

    productDetailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start',  margin: '65px' });
  };

  // const handleProduct = () => {
  //   navigate('/checkout');
  // }

  const handleAddToCart = () => {
    if (product) {
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
        setCart([...cart]);
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
      setTotalAmount(prevTotalAmount => prevTotalAmount + product.price);
    } else {
      console.error('Cannot add to cart, product not found');
    }
  };
  const increaseQuantity = (item) => {
    item.quantity += 1;
    setTotalAmount(prevTotalAmount => prevTotalAmount + item.price);
    setCart([...cart]);
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setTotalAmount(prevTotalAmount => prevTotalAmount - item.price);
      setCart([...cart]);
    }
  };

  const removeItem = (item) => {
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
    setTotalAmount(prevTotalAmount => prevTotalAmount - (item.price * item.quantity));
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <div className="title">PRODUCT DETAILS</div>
      <div className="detail" ref={productDetailsRef}>
        <div className="image">
         <img src={product.images} alt="" />
        </div>
        <div className="content">
        <h1>{product.title}</h1>
        <div className="price">Rs{product.price}</div>

        <div className="rating">Rating:{product.rating}</div>
        <div className="button">
            <button onClick={handleAddToCart}>Add to Cart</button>
            {/* <button onClick={handleProduct} >Check Out</button> */}
          </div>

    <div className="decription">{product.description}</div>
        </div>
        <Checkout cart={cart} totalAmount={totalAmount} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem} />
      </div>
      <div className='header'>
      <h1 className="product-list-title">Product List</h1>
      <div className='product-container'>
  {products.map(product => (
    <div key={product.id} className='product' onClick={() => handleProductClick(product)}>
  <img src={product.images} alt='hi'/>
    <h3>{product.title}</h3>
      <h3>Rs{product.price}</h3>
      <h3>rating{product.rating}</h3>
      <button>Add to cart</button>
    </div>
  ))}
      </div>
      <Navbar/>
      <div className='product-preview'>
        
      </div>
    </div>
    <Navbar />
    
    </div>
    
  );
}

export default ProductDetails;
