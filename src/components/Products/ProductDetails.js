import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import "./ProductDetail.css";

function ProductDetails({cartProducts, setCartProducts, convertPrice}) {
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

    //장바구니 물건 중복된 물건
    const setCartQuantity = (id, cartQauntity) => {
        const found = cartProducts.filter((el) => el.id === id)[0];
        const idx = cartProducts.indexOf(found);
        const cartItem = {
            id: product.id,
            image: product.image,
            name: product.name,
            price: product.price,
            quantity: cartQauntity
        };
        setCartProducts([...cartProducts.slice(0, idx), cartItem, ...cartProducts.slice(idx+1)]);
    }

    const cartHandle = () => {
        //유튜브 강의 정리
        const cartItem = {
            id: product.id,
            image: product.image,
            name: product.name,
            price: product.price,
            quantity: quantity
        };

        const found = cartProducts.find((el) => el.id === cartItem.id);

        if(found) setCartQuantity(product.id, found.quantity + quantity);
        else{
            setCartProducts([...cartProducts, cartItem]);
        }

        //기존 카트프로덕트들은 유지하고, 새로운 cartItem을 넣는 방식


        // product.quantity = quantity;

        // for(let i = 0; i < cartProducts.length; i++){
        //     if(cartProducts[i].id === {id}){
        //         if(cartProducts[i].quantity === quantity){
        //             return;
        //         }else{
        //             cartProducts[i].quantity = quantity;
        //             setCartProducts(cartProducts2 => [...cartProducts2, product]);
        //         }
        //     }else{
        //         setCartProducts(cartProducts2 => [...cartProducts2, product]);
        //     }
        // }

        // if(cartProducts.id === {id}) {
        //     if(cartProducts.quantity === quantity){
        //         return;
        //     }else{
        //         cartProducts.quantity = quantity;
        //     }
        // }

    }



    return (
        <>
        <Header /> 
        <Nav />
        <div className='productDetails'>
                <img src = {product.image} alt='상세이미지'></img>
                <div className='detail2'>
                    <div className='detailTitle'>{product.name}</div>
                    <div className='detailPrice'>{convertPrice(product.price + "")}</div>
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