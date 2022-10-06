import React from 'react';
import { Button } from 'react-bootstrap';
import './Shop.css'

const Shop = (props) => {
  const{name,img,price,ratings,seller} = props.product
    return (
        <div>
            <div className='card-container'>
                <div className='custom-card'>
                <img src={img}  className='img-fluid' alt="" />
                <h5>name: {name}</h5>
                <h5>price: ${price}</h5>
                <h5>seller: {seller}</h5>
                <h5>rating: {ratings}</h5>
                </div>
                <button className='btn-custom'>Add to Cart</button>
            </div>
           
        </div>
    );
};

export default Shop;