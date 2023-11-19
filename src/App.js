import Rootlayout from './layout/Rootlayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';

import './App.css';
import React from 'react';
import Serivce from './pages/Service';
import Dealar from './pages/Dealar';
import Clean from './pages/Clean';
import Cart from './pages/Cart';


function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Rootlayout/>}>
              <Route index element={<Home/>} />
              <Route path='about' element={<About/>} />
              <Route path='service' element={<Serivce/>} />
              <Route path='dealar' element={<Dealar/>} />
              <Route path='wash' element={<Clean/>} />
              <Route path='cart' element={<Cart/>} />
            </Route>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
