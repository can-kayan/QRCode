import '../pagesCss/BaskedPage.css'
import '../componentsCSS//OrderCard.css';
import React, { useEffect, useState } from "react";
import ProductCard from '../componentsJS/ProductCard';
import OrderCard from '../componentsJS/orderCard';
import Axios  from 'axios';
import { FaMinus, FaPlus } from 'react-icons/fa';
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
    const [productData, setProductData] = useState([]);
    const [productType, setProductType] = useState([]);
    const [cart, setCart] = useState({});
  
  const getType=async()=>{
    const path = window.location.pathname;
    
    const category = path.substring(1);
    console.log(category)
      let newFilter=await Axios.get(`http://localhost:5000/api/v2/user/Orders`)
      setProductType(newFilter.data)
    
    
  }
  useEffect(() => {
    getType();
  }, []);
  let totalPrice=0
    const getData = async () => {
      try {
        let id=productType[2].orderInformation.map(information=>information.productId)
        console.log(productType[0].orderInformation.map(information=>information.productId))
        
        let response
        response = await Axios.get(`http://localhost:5000/api/v2/user/Product?_id=${id}`);
        setProductData(response.data);
        
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getData();
    });
 return(
    <div>
    <div className='basked-page'>
        <div className='order-list'>
            <div className="box-container">
                <div>
                    <OrderCard />
                </div>
            </div>
        </div>
        <div className='order-summary'>
            <div className='order-products'>
                {productData.map((product,index)=>(
                    <p  key={index}>{product.name}      {miktar} adet       {totalPrice+=miktar*product.price}₺</p>
                ))}
            </div>
            <div className='total-price'>
                <p>Total</p>
                <div className='price'>{totalPrice}</div>
            </div>
            <div className='order-note'>
                <p>Note</p>
                <textarea type='text' className='note' style={{height:'100px'}}></textarea>
            </div>
            <input type='submit' className='button-payment'>
            </input>
        </div>
        
    </div>
   </div>
 )
}


export default BaskedPage;
