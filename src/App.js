import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Cart from './components/Header/Cart';
import MyPage from './components/Header/MyPage';
import Login from './components/Header/Login';
import Register from './components/Header/Register';
import Home from './Home';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/cart" element = {<Cart />} />
          <Route path="/mypage" element = {<MyPage />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
