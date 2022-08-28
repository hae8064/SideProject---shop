import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Cart from './components/Header/Cart';
import MyPage from './components/Header/MyPage';
import Login from './components/Header/Login';
import Register from './components/Register';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element = {<Header />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/cart" element = {<Cart />} />
          <Route path="/mypage" element = {<MyPage />} />
        </Routes>
      </div>
  );
}

export default App;
