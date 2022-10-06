import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Shops.css'


const Shops = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div>
            <div className='shop-container'>
                <div className='shops'>
                 <div className='product-container'>
                    {
                        products.map(product => <Shop product={product} key={product.id}></Shop>)
                    }
                 </div>
                </div>


                <div className='cart'>
                    <h5>cart calculation</h5>
                </div>
            </div>
        </div>
    );
};

export default Shops;