import React from 'react'
import { Link } from 'react-router-dom';
import "../../App.css";

function BestGrid() {
  return (
    <div className='bestGrid'>
        <h2>Best Products</h2>
        <div className='product_container'>
            <div className='product'>
                <div className='product_img_div'><img src={require("../../imgs/bestItems/best1.jpg")} alt="베스트 아이템" className='product_img'/></div>
                <h5 className='product_title'>상품제목</h5>
                <div className='product_mon'>30,000원</div>
                <div className='product_link_div'><Link className="product_link" to = "/cart">장바구니담기</Link></div>
            </div>
            <div className='product'>
                <div className='product_img_div'><img src={require("../../imgs/bestItems/best2.jpg")} alt="베스트 아이템" className='product_img'/></div>
                <h5 className='product_title'>상품제목</h5>
                <div className='product_mon'>22,000원</div>
                <div className='product_link_div'><Link className="product_link" to = "/cart">장바구니담기</Link></div>
            </div>
            <div className='product'>
                <div className='product_img_div'><img src={require("../../imgs/bestItems/best3.jpg")} alt="베스트 아이템" className='product_img'/></div>
                <h5 className='product_title'>상품제목</h5>
                <div className='product_mon'>21,000원</div>
                <div className='product_link_div'><Link className="product_link" to = "/cart">장바구니담기</Link></div>
            </div>
            <div className='product'>
                <div className='product_img_div'><img src={require("../../imgs/bestItems/best1.jpg")} alt="베스트 아이템" className='product_img'/></div>
                <h5 className='product_title'>상품제목</h5>
                <div className='product_mon'>25,000원</div>
                <div className='product_link_div'><Link className="product_link" to = "/cart">장바구니담기</Link></div>
            </div>
            <div className='product'>
                <div className='product_img_div'><img src={require("../../imgs/bestItems/best1.jpg")} alt="베스트 아이템" className='product_img'/></div>
                <h5 className='product_title'>상품제목</h5>
                <div className='product_mon'>25,000원</div>
                <div className='product_link_div'><Link className="product_link" to = "/cart">장바구니담기</Link></div>
            </div>
        </div>
    </div>
  )
}

export default BestGrid;