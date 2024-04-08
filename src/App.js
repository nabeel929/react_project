import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';
import Home from './modules/Home';
import { Route, Routes } from 'react-router-dom';
import Product from './modules/Product';
import Footer from './components/Footer';
import Products from './modules/Products';
import Categoryproducts from './modules/CategoryPoduct';
import Cart from './modules/Cart';
import BuyitNow from './modules/paymet.js';
import About from './modules/About';
import Contact from './modules/About';
import Login from './modules/Login';
import Regitser from './modules/Register';
import Additems from './modules/AddProduct.js/addproductpage';
import Nabeel from './components/Register';
import Protected from './modules/Protected';
import Logout from './modules/Logout';
import Thapa from './components/Thapaloginform';
function App() {
  return (
    < >
    <Header/>
    <Routes>
      <Route path="/" element={<Protected Cmp={Home}/>}/>
      <Route path="/products/:id" element={<Protected Cmp={Product}/>} />
      <Route path="*" element={<div>page not found</div>}/>
      <Route path="/products" element={<Protected Cmp={Products}/>}/>
      <Route path="/categories/:name" element={< Protected Cmp={Categoryproducts}/>}/>
    <Route path='/buyitems' element={<Protected Cmp={BuyitNow}/>}/>
    <Route path='/contact' element={<Protected Cmp={Contact}/>} />
    <Route path='/addproduct' element={<Protected Cmp={Additems}/>} />
   
       <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Regitser />}/>

  <Route path='/thapa' element={<Thapa/>} />
      
      
    </Routes>

<Footer/>
    </>
  );
}

export default App;
