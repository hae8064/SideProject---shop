import React from 'react'

function CartList({cartProducts, convertPrice}) {
    console.log(cartProducts);
  return (
    <div className='cartElement'>
        <img src= {cartProducts.image} alt="장바구니 이미지" />

        <div className='cartRightPosition'>
        <div className='cartTitle'>{cartProducts.name}</div>
        <div className='cartPrice'>{convertPrice(cartProducts.price)}원</div>
        <div className='cartQuantity'>
            주문수량: {cartProducts.quantity}
            <button className='plusButton'>+</button>
            <button className='minusButton'> - </button>
        </div>
        </div>
    </div>
    );
}; 

export default CartList;
