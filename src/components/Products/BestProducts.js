import React from 'react'
import { Link } from 'react-router-dom';
import "./BestProduct.css";

function BestProducts({product, convertPrice}) {
    return (
    <div className='bestGrid'>
        <div className="bestProducts">
                    <Link to = {`/productDetail/${product.id}`} state={product}><div className= "product_img_div"><img src= {product.image} alt="베스트 아이템" /></div></Link>
                    <h5 className= "product_title">{product.name}</h5>
                    <div className= "product_mon">{convertPrice(product.price)}</div>
                    <div className= "product_link_div"><Link className= "product_link" to = "/cart">장바구니담기</Link></div>
        </div>
    </div>
    );
}

export default BestProducts;