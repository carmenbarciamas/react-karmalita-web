import {createContext, useState, useEffect} from "react";
import { PRODUCTS } from '../products';

export const ExistingShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for ( let i = 1; i< PRODUCTS.length; i++){
        cart[i] = 0;
    }
    return cart;
};

export const ExistingShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount = cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;

    };

    const addItemToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+1}));
    };

    const removeItemFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    };

    const checkout = () => {
        return getDefaultCart();
    };

    const contextValue = {
        cartItems,
        addItemToCart,
        removeItemFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        checkout
    };

    return (
        <ExistingShopContext.Provider value={contextValue}>
        {props.children}
        </ExistingShopContext.Provider>
    );









}

