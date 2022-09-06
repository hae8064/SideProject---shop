import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import BestProducts from '../Products/BestProducts';
import "../Products/BestProduct.css";

function BestGrid({products, setProducts, convertPrice, cartProducts, setCartProducts}) {
    useEffect(() => {
        axios.get("/data/products.json").then((data) => {
            setProducts(data.data.products);
        })
    }, [setProducts]);

    console.log(products);

    return (
    <div>
        <div className='bestGrid'>
            <h2>Best Products</h2>
            <hr />
        </div>

        <div className='product_container'>
            {products.map((product) => {
                return <BestProducts key={product.id} product={product} convertPrice={convertPrice} cartProducts={cartProducts} setCartProducts={setCartProducts}/>;
            })}
        </div>
    </div>
    );
}

export default BestGrid;