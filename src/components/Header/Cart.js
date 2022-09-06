import React, { useEffect } from 'react'
import Nav from '../Nav/Nav'
import Header from './Header'
import "./Cart.css";
import axios from 'axios';

function Cart({products, setProducts, convertPrice}) {

    useEffect(() => {
      axios.get("/data/products.json").then((data) => {
          setProducts(data.data.products);
      })
  }, [setProducts]);

  console.log(products);
  return (
    
      <div className='cart'>
          <Header/>
          <h2>장바구니</h2>
          <hr/>
          <div className='cartElement'>
            <img src= {require("../../imgs/banner1.jpg")} alt="장바구니 이미지" />

            <div className='cartRightPosition'>
              <div className='cartTitle'>Best1</div>
              <div className='cartPrice'>{convertPrice(20000)}원</div>
              <div className='cartQuantity'>
                주문수량: 1
                <button className='plusButton'>+</button>
                <button className='minusButton'> - </button>
              </div>
            </div>

          </div>
          <div className='cartTotalPrice'>총금액: 20000</div>
      </div>
  );
}

export default Cart;