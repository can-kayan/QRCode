import { FaMinus, FaPlus } from 'react-icons/fa';
import '../componentsCSS//OrderCard.css';
import React, { useEffect, useState } from 'react';
import  Axios  from 'axios';
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
        
        
        const response = await Axios.get(`http://localhost:5000/api/v2/user/Product?_id=${id}`);
        setProductData(response.data);
        
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getData();
    },[]);
    const handleAddToCart = (product) => {
      setCart((prevCart) => {
        // Eğer ürün sepette yoksa adetini 1 olarak ayarla, varsa bir artır
        const updatedCart = { ...prevCart };
        updatedCart[product._id] = (updatedCart[product._id] || 0) + 1;
        // console.log(updatedCart)
        return updatedCart;
  
      });
    };
    const handleCheckout= () => {
      // Sepeti sunucuya göndermek için bir API isteği gönderilebilir.
      // Örneğin:
      Axios.post("http://localhost:5000/api/v2/user/new=Orders", cart)
        .then(response => {
          console.log("Checkout success:", response.data);
          // Sepeti boşalt
          setCart({});
        })
        .catch(error => {
          console.error("Checkout error:", error);
        });
    };
  
    return (
      <div>
        {productData.map((product, index) => (
          <div className='product-card' key={index}>
            <div className="product-image"></div>
            <div className='product-title'>{product.name}</div>
            <div className='product-description'>
              <p>{product.description}</p>
            </div>
            <div className='button'>
              <div className='quantity-calculate'>
                <button onClick={handleAzalt}><FaMinus></FaMinus></button>
                <p style={{fontSize:'25px' , color:'white'}} color='#fff'>{miktar}</p>
                <button onClick={handleArtir}><FaPlus></FaPlus></button><p>{product.price*miktar}₺</p>
              </div>
                
            </div>
          </div>
        ))}
      </div>
    );
}

export default OrderCard;

