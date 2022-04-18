import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from '../Templates/Cart';
import Checkout from '../Templates/Checkout';
import Contactus from '../Templates/Contactus';
import Detail from '../Templates/Detail';
import Home from '../Templates/Home';
import Shop from '../Templates/Shop';
import '../Templates/Static/css/style.css';

const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/contact' element={<Contactus />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/detail' element={<Detail />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router;