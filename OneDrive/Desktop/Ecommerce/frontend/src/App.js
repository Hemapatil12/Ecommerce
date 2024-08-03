import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';  // Corrected import to use 'Shop'
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';  // Assuming this is the correct name and path
import Popular from './components/Popular/Popular';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
//import LoginSignup from './pages/LoginSignup';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={women_banner}category="women" />} />
          <Route path='/kid' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
      
        </Routes>

       
 <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
