import React , { useContext } from 'react';
import { ExistingShopContext } from '../../context/existing-shop-context';

 export const CartItem = (props) => {
    const {id, productName, price, productImage } = props.data;
    const { cartItems, addItemToCart, removeItemFromCart, updateCartItemCount} = useContext(ExistingShopContext);

    return(
        <div className='cart-item'>
            <img src={ productImage }/>
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p> Price: ${price.toLocaleString()}</p>
                <div className='countHandler'>
                    <button onClick={() => removeItemFromCart(id)}> - </button>
                    <input
                    value={cartItems[id]}
                    onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={() => addItemToCart(id)}> + </button>

                </div>
            </div>
        </div>

    );

}