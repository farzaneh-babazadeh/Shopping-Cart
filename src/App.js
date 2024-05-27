import './App.css';
import { Navigate, Route, Routes } from "react-router-dom"

//Context
import ProductsContextProvider from './context/ProductContext';
import CartContexProvider from './context/CartContexProvider';

//Components
import Store from './components/Store'
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import ShopCart from './components/ShopCart';

function App() {
  return (
    <div className="App">
     <ProductsContextProvider>
       <CartContexProvider>
        <Navbar/>
       < Routes>
         <Route path="/product/:id" element={<ProductDetails/>}/>
         <Route path="/product" element={<Store />}/>
         <Route path="/cart" element={<ShopCart />}/>
         <Route  path="/"  element={<Navigate to="/product"  replace/>}/>
         </ Routes>
       </CartContexProvider>
     </ProductsContextProvider>
    </div>
  );
}

export default App;
