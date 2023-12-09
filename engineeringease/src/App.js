// App.js
import React from 'react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { Register } from './components/Register'
import { Login } from './components/Login';
import Footer from './components/Footer';
import { Home } from './components/Home';
import {Imageslider} from './components/Imageslider'
import { Dashboard } from './components/Dashboard';
import ShoppingCart from './components/ShoppingCart';


const App = () => {
  return (
    <BrowserRouter>
    <NavigationBar/>
    <Routes>
    <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/student-login" element={<Login/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/dashboard/shoppingcart" element={<ShoppingCart/>} ></Route>
    </Routes>
    <Imageslider></Imageslider>
    
    <Footer></Footer>
    
  </BrowserRouter>
  );
};

export default App;
