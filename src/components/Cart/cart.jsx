import React, { useContext } from 'react';
import { ExistingShopContext } from '../../context/existing-shop-context'; 
import { PRODUCTS } from '../../products';
import { CartItem } from './cartItem';
import { useNavigate } from 'react-router-dom';
import './cart.css';

export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ExistingShopContext);

    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return(
        <div className='cart'>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className='cart'>
                {PRODUCTS().map((product) => {
                    if (cartItems[product.id] !== 0){
                        return <CartItem data={product}/>;
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="checkout">
                    <div className='subtotal'>
                        <h2>Subtotal: ${totalAmount.toLocaleString()}</h2>
                    </div>
                    <div className="buttons">
                        <button onClick={() => navigate("/")}>Continue Shopping</button>
                        <button onClick={() => {checkout(); navigate("./checkout")}}>
                            Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <h1> Your shopping Cart is empty</h1>
            )}
        </div>
    )


}