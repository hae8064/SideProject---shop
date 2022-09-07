import React, { useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import Header from './Header'
import "./Cart.css";
import axios from 'axios';
import CartList from './CartList';

function Cart({cartProducts, setCartProducts, convertPrice}) {

    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
      setProducts(cartProducts);
      cartProducts.map((cartProducts) => {
          // setTotalPrice(totalPrice + (cartProducts.price * cartProducts.quantity));
          setTotalPrice( totalPrice => totalPrice + (cartProducts.price* cartProducts.quantity));
      });
    }, [cartProducts]);

  console.log(cartProducts);

  return (
      <div className='cart'>
          <Header/>
          <h2>장바구니</h2>
          <hr/>

          {cartProducts.length === 0 ? (
            <div>
              <h2>장바구니에 상품이 없습니다..</h2>
              <p>원하는 상품을 장바구니에 담아보세요!</p>
            </div>
          ) : (cartProducts.map((cartProducts) => {
            return <CartList key = {cartProducts.id+cartProducts.length+cartProducts.quantity}cartProducts={cartProducts} convertPrice={convertPrice}/>
          }))}

          {cartProducts.length === 0 ? "" : (
            <div className='cartTotalPrice'>
              
              총금액: {convertPrice(totalPrice)}
              {/* 총금액: {(cartProducts.map((cartProducts) => {
                setTotalPrice(totalPrice+cartProducts.price);
              }))} */}

            </div>
          )}
      </div>
  );
}

export default Cart;