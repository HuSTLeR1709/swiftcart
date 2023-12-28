import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import MensSection from './components/MensSection';
import Signup from './components/signup';
import Cart from './components/Cart';
import WomenSection from './components/WomenSection';
import ShopContextProvider from './components/context/ShopContext';
import KidSection from './components/KidSection'
import Aboutus from './components/Aboutus';
import Itemdetails from './components/Itemdetails';
import OurTeam from './components/OurTeam';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ShopContextProvider>
    <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/mens' element={<MensSection category="men"/>}/>
    <Route path='/login'  element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/womens' element={<WomenSection category="women"/>}/>
    <Route path='/kids' element={<KidSection category="kid"/>}/>
    <Route path='/product' element={<Itemdetails/>}>
         <Route path=':productId' element={<Itemdetails/>}/>
    </Route>
    <Route path='/about' element={<Aboutus/>}/>
    <Route path='/ourteam' element={<OurTeam/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </ShopContextProvider>
  <ToastContainer className='custom-toast'/>
  
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
