import {createContext, useState, useEffect} from "react";
import { PRODUCTS } from '../products';

export const ExistingShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for ( let i = 1; i < 9; i++){
        cart[i] = 0;
    }
    return cart;
};
//8 is the length of the products

export const ExistingShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            console.log(item);
            if(cartItems[item]>0){
                //let itemInfo = PRODUCTS().find((product) => product.id == item);
                //totalAmount += cartItems[item]*PRODUCTS()[item-1].price;
                
                
                //console.log(itemInfo);
                //totalAmount += cartItems[item] * itemInfo.price;
                totalAmount += cartItems[item];
                
               
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

