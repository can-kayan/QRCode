import '../pagesCss/BaskedPage.css'
import React, { useState } from "react";
import Footer from '../componentsJS/Footer';
import OrderCard from '../componentsJS/orderCard'
function BaskedPage() {
    const [miktar, setMiktar] = useState(1);

    const handleArtir = () => {
      setMiktar(miktar + 1);
    };
  
    const handleAzalt = () => {
      if (miktar > 0) {
        setMiktar(miktar - 1);
      }
    };
    function addedOrders(){
        
    }
 return(
    <div>
    <div className='basked-page'>
        <div className='order-list'>
            <div className="box-container">
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </div>
        </div>
        <div className='order-summary'>
            <div className='order-products'>
                <p>Cool Breeze Cocktail    3 adet         150$</p>
                <p>Cool Breeze Cocktail    3 adet         150$</p>
                <p>Cool Breeze Cocktail    3 adet         150$</p>
                <p>Cool Breeze Cocktail    3 adet         150$</p>
                <p>Cool Breeze Cocktail    3 adet         150$</p>
                <p>Cool Breeze Cocktail    3 adet         150$</p>
            </div>
            <div className='total-price'>
                <p>Total</p>
                <div className='price'>900$</div>
            </div>
            <div className='order-note'>
                <p>Note</p>
                <textarea type='text' className='note' style={{height:'100px'}}></textarea>
            </div>
            <input type='submit' className='button-payment' onClick={addedOrders} >
            </input>
        </div>
        
    </div>
   </div>
 )
}


export default BaskedPage;
