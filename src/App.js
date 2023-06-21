import logo from './logo.svg';
import Main from './components/Main';
import { ExistingShopContextProvider } from './context/existing-shop-context';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import ExistingProductsShop from './components/Shop/ExistingProductsShop';
import Customproducts from './components/Shop/CustomProducts';
import { ExistingProductDetails } from './components/Shop/ExistingProductDetails';
import { Cart } from './components/Cart/cart';


function App() {

  return (
    
    <div className='App'>
      <BrowserRouter>
     
         <ExistingShopContextProvider> 
            
              <Main />
      
                <Routes>  {/* Routes actúa como contenedor padre de todas las 
              rutas individuales que se crearán en nuestra aplicación. */}

                  {/* <Route path="/" element={<Home />} />   */}
                  <Route path="/karmalita/shop" element={<Shop />} />
                  <Route path="/karmalita/about_us" element={<AboutUs />} />
                  <Route path="/karmalita/contact" element={<Contact />} />
                  <Route path="/karmalita/shop/already_existing_products" element={<ExistingProductsShop/>} />
                  <Route path="/karmalita/shop/custom_products" element={<Customproducts />} />
                  <Route path="/karmalita/shop/already_existing_products/:id" element={<ExistingProductDetails />} />
                  <Route path="/karmalita/cart" element={<Cart />} />

              </Routes>
          
            

          </ExistingShopContextProvider> 

          
        
         
      </BrowserRouter>       
    </div>
  );
}

export default App;
