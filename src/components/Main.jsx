import React from "react";
import Karmalita_pearl from '../assets/Karmalita_pearl_03.mp4';
import { BrowserRouter,  Link, Routes,Route, Switch } from "react-router-dom";
import Shop from './Shop/Shop.jsx';
import AboutUs from './AboutUs/AboutUs.jsx';
import Contact from './Contact/Contact.jsx';
import Home from './Home/Home.jsx';
import ExistingProductsShop from "./Shop/ExistingProductsShop.jsx";
import Customproducts from "./Shop/CustomProducts.jsx";
import { ExistingProductDetails } from "./Shop/ExistingProductDetails";
import { ExistingShopContextProvider } from "../context/existing-shop-context";
import { Cart } from "./Cart/cart";





const Main = () => {
    
    
    
    return (
        
         <div className = "main" >
          <nav>
        
            <video src={Karmalita_pearl} autoPlay muted loop></video>  
            <div className="content">

                <Link to ={'/'} >
                
                    <h1>Home</h1>
                </Link> 

                <Link to={'/karmalita/shop'}>
                    <h1>Shop</h1>
                </Link>

                <Link to={'/karmalita/about_us'} >
                
                    <h1>About us (me)</h1>
                </Link>

                <Link to={'/karmalita/contact'}>
                     <h1>Contact</h1>
                </Link>

                <Link to={'/karmalita/cart'} >
                
                     {/* <ShoppingCart size={32} /> */}
                     <h1>Shopping Cart</h1>
                </Link>
            </div>

       
        </nav>
        {/* <ExistingShopContextProvider> 
        <div className="App">
        
            
            
        //     <Routes>  {/* Routes actúa como contenedor padre de todas las 
        //     rutas individuales que se crearán en nuestra aplicación. */}

        {/* //     {/* <Route path="/" element={<Home />} />   */}
        {/* //     <Route path="/karmalita/shop" element={<Shop />} />
        //     <Route path="/karmalita/about_us" element={<AboutUs />} />
        //     <Route path="/karmalita/contact" element={<Contact />} />
        //     <Route path="/karmalita/shop/already_existing_products" element={<ExistingProductsShop/>} />
        //     <Route path="/karmalita/shop/custom_products" element={<Customproducts />} />
        //     <Route path="/karmalita/shop/already_existing_products/:id" element={<ExistingProductDetails />} />
        //     <Route path="/karmalita/cart" element={<Cart />} />

        //     </Routes> */} 
         

          
        {/* // </div>
        // </ExistingShopContextProvider> 
        //  */} 
       
        </div>
        
        
    )
}

export default Main;

