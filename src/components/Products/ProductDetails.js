import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import "./ProductDetail.css";

function ProductDetails() {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("/data/products.json").then((data) => {
            setProduct(data.data.products.find((product) => product.id === parseInt(id)));
        });
    }, [id]);

    console.log(product);

    return (
        <>
        <Header /> 
        <Nav />
        <div className='productDetails'>
                <img src = {require("../../imgs//banner1.jpg")} alt='상세이미지'></img>
                <div className='detail2'>
                    <div className='detailTitle'>Best1</div>
                    <div className='detailPrice'>20000</div>
                    <div className='detailCount'>
                        주문수량 
                        <span className='detailCountNumber'> 1</span>
                        <button className='plusButton'>+</button>
                        <button className='minusButton'>-</button>
                    </div>
                    <div className='detailButtons'>
                        <button className='detailCart'>장바구니 담기</button>
                        <button className='detailPayment'>바로구매</button>
                    </div>
                </div>
        </div>
        </>
    );
}

export default ProductDetails;