import React from 'react';
import useProducts from '../../Hooks/UseProducts';

const Order = () => {
    const [products, setProducts] =useProducts()
    return (
        <div>
            <h2>this is order page</h2>
            <h3>products number : {products.length}</h3>
       
        </div>
    );
};

export default Order;