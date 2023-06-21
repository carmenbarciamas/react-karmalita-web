import React from 'react';
import './Shop.css';
import { BrowserRouter,  Link, Route, Routes, Switch } from "react-router-dom";
import Customproducts from './CustomProducts.jsx';
import ExistingProducts from './ExistingProductsShop.jsx';

export default function Shop() {
  return (

    <>
    {/* <BrowserRouter> */}

    
    <div className='content'>
        <div className='newContent'>
        <nav>
        <Link to={'/karmalita/shop/already_existing_products'}>
          <h1>Already Existing Products</h1>
        </Link>

       <Link to={'/karmalita/shop/custom_products'}>
            <h1>Custom Products</h1>
       </Link>
       </nav>

       <main>
        {/* <Routes>
        <Route path="/karmalita/shop_already_existing_products" element={<Customproducts />} />
        <Route path="/karmalita/shop/custom_products" element={<ExistingProducts />} />
        </Routes> */}


       </main>
        </div>
    </div>

    {/* </BrowserRouter> */}
    </>
    
   
  )
};


