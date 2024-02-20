import React from 'react';
import './Checkout.css';

const Checkout = ({ cart, totalAmount, increaseQuantity, decreaseQuantity, removeItem }) => {
  return (
    
    <div className="checkout">
      <h2> Your Checkout</h2>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Product ID</th>
            <th scope='col'>Title</th>
            <th scope='col'>Price</th>
            <th scope='col'>Quantity</th>
            
          </tr>
        </thead>
        <tbody>
         {cart.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
              <td>{item.title}</td>
              <td>Rs{item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button  className="btn btn-danger mr-2" onClick={() => removeItem(item)}>Delete</button></td>
                <td> <button className="btn btn-success mr-2"  onClick={() => increaseQuantity(item)}>+</button></td>
                <td>
                <button className="btn btn-warning" onClick={() => decreaseQuantity(item)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total:Rs{totalAmount}</td>
           
          </tr>
        </tfoot>
      </table>

    </div>
  );
};

export default Checkout;
