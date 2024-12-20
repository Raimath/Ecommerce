import './App.css';
import React from 'react'
import { Contact } from './Components/Contact';
import { Login } from './Components/Login';
import { MyAccount } from './Components/MyAccount';
import { Navbar } from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from './Components/Register';
import { ContextProvider } from './Context/context';
import { Home } from './Components/Home';
import {Cart} from './Components/Cart'
import { SingleProduct } from './Components/SingleProduct';
import { Shop } from './Components/Shop';
import Footer from './Components/Footer';
import { TC } from './Components/TC';
import { ServicesPage } from './Components/ServicesPage';
import ScrollToTop from './Components/ScrollToTop';

function App() {

  return (
    <>
      <ContextProvider>
      <BrowserRouter>
      
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/tc" element={<TC/>}/>
          <Route path="/services" element={<ServicesPage/>}/>
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </ContextProvider> 
    </>
  );
}

export default App;
