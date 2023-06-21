import React from 'react';
import './ExistingProductsShop.css';
import { PRODUCTS } from '../../products';
import { ExistingProduct } from './ExistingProduct';
import './ExistingProductsShop.css';

function ExistingProductsShop() {
  return (
    <div className='existing-shop'>
      <div className='existing-shop-title'>
        <h1>Already existing products with the chance of being reproduce</h1>
      </div>

      <div className='products'>
        {PRODUCTS().map((product) => (
          <ExistingProduct data={product}/>))}

      </div>
      
    </div>
  )
}

export default ExistingProductsShop


