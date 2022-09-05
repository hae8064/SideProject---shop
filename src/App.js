import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Cart from './components/Header/Cart';
import MyPage from './components/Header/MyPage';
import Login from './components/Header/Login';
import Register from './components/Header/Register';
import Home from './Home';
import ProductDetails from './components/Products/ProductDetails';

function App() {
  const [products, setProducts] = useState([]);
  const [detailProduct, sestDetailProduct] = useState([]);

  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  };

  return (
      <div>
        <Routes>
          <Route path="/" element = {<Home products={products} setProducts={setProducts} convertPrice={convertPrice}/>} />
          <Route path="/login" element = {<Login />} />
          <Route path="/cart" element = {<Cart />} />
          <Route path="/mypage" element = {<MyPage />} />
          <Route path="/productDetail/:id" element = {<ProductDetails />} />
        </Routes>
      </div>
  );
}

export default App;
