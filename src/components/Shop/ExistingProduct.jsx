import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ExistingShopContext } from '../../context/existing-shop-context';


export const ExistingProduct = (props) => {
    const { id, productName, price, productImage} = props.data;
    const { addItemToCart, cartItems} = useContext(ExistingShopContext);

    const cartItemCount = cartItems[id];

    return(
        <div className='existing_product'>
            <Link to={`already_existing_products/${id}`} className="product-link">
                <img src={productImage}></img>
                <div className='description'>
                    <p>
                        <b>{productName}</b>
                    </p>
                    <p>
                        ${price}
                    </p>
                </div>
            </Link>
            <button className="addToCartButton" onClick={() => addItemToCart(id)}>
                Add to Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>


        </div>
    )


}