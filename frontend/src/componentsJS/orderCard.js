import { FaMinus, FaPlus } from 'react-icons/fa';
import '../componentsCSS//OrderCard.css';
import React, { useState } from 'react';
function OrderCard() {
    const [miktar, setMiktar] = useState(1);

    const handleArtir = () => {
      setMiktar(miktar + 1);
    };
  
    const handleAzalt = () => {
      if (miktar > 0) {
        setMiktar(miktar - 1);
      }
    };
  return (
    
      <div className='order-card'>
        
         <div className="order-image"
        ></div>
        <div className='order-title'>Cool Breeze Cocktail</div>
        <div className='order-description'>
         <p>45 ml (1 1/2 ons) Vodka</p>
          <p>30 ml (1 ons) Blue Curaçao likörü</p>
          <p>30 ml (1 ons) Ananas Suyu</p>
          <p>15 ml (1/2 ons) Limon Suyu</p>
          <p>Buz</p>
        </div>
       <div className='quantity-calculate'>
            <button onClick={handleAzalt}><FaMinus></FaMinus></button>
            <p style={{fontSize:'25px' , color:'white'}} color='#fff'>{miktar}</p>
            <button onClick={handleArtir}><FaPlus></FaPlus></button>
       </div>
      </div>
  );
}

export default OrderCard;
