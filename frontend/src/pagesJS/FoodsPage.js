import '../pagesCss/FoodsPage.css';
import React, { useState } from "react";
import Footer from '../componentsJS/Footer';
import { FaMinus, FaPlus } from 'react-icons/fa';
import ProductCard from '../componentsJS/ProductCard';
function FoodPage() {
 return(
    <div className='page'>
        <div className='food-page'>
            <div className='product-category'>
                <div className='category'>
                    <p>Kahvaltı</p>
                    <p>Çorba</p>
                    <p>Salata</p>
                    <p>Ana Yemek</p>
                    <p>Fast Food</p>
                    <p>Tatlılar</p>
                    <p>Sağlıklı Yemekler</p>
                </div> 
            </div>
            <div className='product-list'>
                <div className="box-container">
                    <ProductCard className="product-card" />
                </div>
            </div> 
        </div>
   </div>
 )
}


export default FoodPage;
