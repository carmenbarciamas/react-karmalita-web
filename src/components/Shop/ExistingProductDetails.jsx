import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { ExistingShopContext } from '../../context/existing-shop-context';
import { PRODUCTS } from '../../products';
import './ExistingProductDetails.css';

export const ExistingProductDetails = () => {
    const {id} = useParams();
    const {addItemToCart, cartItems} = useContext(ExistingShopContext);

    const cartItemCount = cartItems[id];

    //find the product with the give id
    const product = PRODUCTS().find((p) => p.id === Number(id));

    //returns an error if the product was not found
    if(!product) {
       return <div>Product was not found!</div>
    }

    const { productName, description, productImage, price} = product;

    return (
        <div className="existing-product-container">
            <div className='existing-product-image-container'>
                <img src={productImage} alt={productName} className='exiting-product-image'/>
            </div>
            <div className='existing-product-details-container'>
                <h1 className='existing-product-details'>{productName}</h1>
                <div className="product-details">
                    <p><b>ID:</b>{id}</p>
                    <p><b>PRICE:</b>${price}</p>
                    <p><b>Description:</b></p>
                    <p>{description}</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quis perspiciatis voluptates possimus, sit necessitatibus in omnis 
            aut praesentium aspernatur id neque voluptatibus perferendis repellat, 
            pariatur esse fuga, voluptas sequi numquam!</p>
            <button className="addToCartButton" onClick={() => addItemToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
                </div>
            </div>
        </div>

    )


}
