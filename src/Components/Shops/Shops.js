import React, { useEffect, useState } from 'react';
import useProducts from '../../Hooks/UseProducts';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import './Shops.css'

const Shops = () => {
    const [products,setProducts]=useProducts()
    const[productPrice,setProductPrice]=useState([])

    
    const handleAddtocart=(product)=>{
        const newProducts = [...productPrice,product]
        setProductPrice(newProducts)
        
    }

    const removedata=()=>{
      
        setProductPrice([])
    }

    return (
        <div>
            <div className='shop-container'>
                <div className='shops'>
                 <div className='product-container'>
                    {
                        products.map(product => <Shop product={product} key={product.id}  handleAddtocart={handleAddtocart}></Shop>)
                    }
                 </div>
                </div>


                <div className='cart'>
                   <Cart cart={productPrice}></Cart>
                   <button onClick={()=> removedata()} className='mx-5 btn btn-danger btn-style'>remove</button>
                </div>
                
            </div>
        </div>
    );
};

export default Shops;