import '../pagesCss/DrinkPage.css';
import React, { useState } from "react";
import Footer from '../componentsJS/Footer';
import ProductCard from '../componentsJS/ProductCard';
function DrinkPage() {
 return(
    <div className='page'>
        <div className='drink-page'>
            <div className='product-category'>
                <div className='category'>
                    <p>Alkolsüz İçecekler</p>
                    <p>Kahve Çeşitleri</p>
                    <p>Çay Çeşitleri</p>
                    <p>Milkshake ve Smoothieler</p>
                    <p>Sıcak Çikolata ve Kakao</p>
                    <p>Su ve Diğer İçecekler</p>
                </div> 
            </div>
            <div className='product-list'>
                <div className="box-container">
                    <ProductCard/>
                </div>
            </div> 
        </div>
   </div>
 )
}


export default DrinkPage;
