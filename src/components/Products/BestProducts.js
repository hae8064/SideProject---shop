import React from 'react'
import { Link } from 'react-router-dom';
import "./BestProduct.css";

function BestProducts({product, convertPrice, cartProducts, setCartProducts}) {
    return (
    <div className='bestGrid'>
        <div className="bestProducts">
                    <Link to = {`/productDetail/${product.id}`} state={product}><div className= "product_img_div"><img src= {product.image} alt="베스트 아이템" /></div></Link>
                    <h5 className= "product_title">{product.name}</h5>
                    <div className= "product_mon">{convertPrice(product.price)}원</div>
                    <div className= "product_link_div"><Link className= "product_link" to = {`/productDetail/${product.id}`}>상품 상세 보기</Link></div>
        </div>
    </div>
    );
}

export default BestProducts;