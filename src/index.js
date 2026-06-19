import React from 'react';
import ReactDOM from 'react-dom/client';
import './Component/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import  './assets/images/logo.jpg';
import Navbar from './Component/navbar/Navbar';
import Home from './Component/pages/Home';
import Photos from './Component/Photos'; 
import Specials from './Component/Specials'; 
import About from './Component/pages/About';
import Contact from './Component/pages/Contact';
import Menu from './Component/pages/Menu';
import Dashboard from './Component/pages/Admin/Dashboard';
import Login from './Component/pages/Admin/Login';
import SignUp from './Component/pages/Admin/SignUp';



import Checkout from './Component/navbar/Checkout';
import Wishlist from './Component/navbar/Wishlist';
import Viewed from './Component/navbar/Viewed';
import { CartProvider } from './Component/navbar/context/CartContext';

import Reviews from './Component/pages/Reviews';
import Footer from './Component/Footer'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index element={<Home />} />           {/* ye home navbar k ilawa yaha py es liye likha ta k jb b browser py website on ho to by default home open ho r phr hum jis componenet py b click kry wo page open ho jay */}
        <Route path='Navbar' element={ <Navbar />} />
        <Route path='home' element={<Home />} />
        <Route path='Photos' element={<Photos />} />
        <Route path='Specials' element={<Specials />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />

        {/* admin routes */}
        <Route path="/admin" element={<SignUp />} />         
        <Route path="/admin/login" element={<Login />} />     
        <Route path="/admin/dashboard" element={<Dashboard />} />   


        <Route path='Menu' element={<Menu />} />
        <Route path='Checkout' element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/viewed" element={<Viewed />} />
        <Route path='Reviews' element={<Reviews />} />
        <Route path='Footer' element={<Footer />} />
        
    </Route>
    
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={ router } />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      bodyClassName="toastBody"
    />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
