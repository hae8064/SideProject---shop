import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import "./ProductDetail.css";

function ProductDetails({cartProducts, setCartProducts}) {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        axios.get("/data/products.json").then((data) => {
            setProduct(data.data.products.find((product) => product.id === parseInt(id)));
        });
    }, [id]);

    const plusHandle = () => {
        setQuantity(quantity+1);
    }

    const minusHandle = () => {
        if(quantity === 1){
            return;
        }
        setQuantity(quantity-1);
    }

    const cartHandle = () => {
        product.quantity = quantity;

        if(cartProducts.id === {id}) {
            if(cartProducts.quantity === quantity){
                return;
            }else{
                cartProducts.quantity = quantity;
            }
        }else{
            setCartProducts(cartProducts2 => [...cartProducts2, product]);
        }

        console.log(cartProducts);
    }



    return (
        <>
        <Header /> 
        <Nav />
        <div className='productDetails'>
                <img src = {product.image} alt='상세이미지'></img>
                <div className='detail2'>
                    <div className='detailTitle'>{product.name}</div>
                    <div className='detailPrice'>{product.price}</div>
                    <div className='detailCount'>
                        주문수량 
                        <span className='detailCountNumber'> {quantity}</span>
                        <button className='plusButton' onClick={plusHandle}>+</button>
                        <button className='minusButton' onClick={minusHandle}>-</button>
                    </div>
                    <div className='detailButtons'>
                        <button className='detailCart' onClick={cartHandle}>장바구니 담기</button>
                        <button className='detailPayment'>바로구매</button>
                    </div>
                </div>
        </div>
        </>
    );
}

export default ProductDetails;