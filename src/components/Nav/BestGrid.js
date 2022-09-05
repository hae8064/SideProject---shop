import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import BestProducts from '../Products/BestProducts';

function BestGrid({products, setProducts, convertPrice}) {
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
        </div>

        <div className='product_container'>
            {products.map((product) => {
                return <BestProducts key={product.id} product={product} convertPrice={convertPrice}/>;
            })}
        </div>
    </div>
    );
}

export default BestGrid;