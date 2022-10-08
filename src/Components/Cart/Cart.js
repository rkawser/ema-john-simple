import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
 
   let total =0;
   let spipping =0;
   for (const product of cart) {

    total = total + product.price
    spipping= spipping + product.shipping
   }
   let tax = parseFloat(( total * 0.1).toFixed(2))
   const totalPrice = (total + spipping + tax).toFixed(2)
    return (

        <div className='cart-container'>
             <h4>Order Summary</h4>
                    <p>Selected Items:{cart.length}</p>
                    <p>Total Price:{total}</p>
                    <p>Total Shipping Charge:{spipping}</p>
                    <p>Tax: {tax}</p>
                    <hr />
                    <h5>Grand Total:{totalPrice}</h5>
       </div>
    );
};

export default Cart;