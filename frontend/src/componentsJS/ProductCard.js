import '../componentsCSS//ProductCard.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ProductCard() {
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState({});

  const getData = async () => {
    try {
      const response = await Axios.get("http://localhost:5000/api/v2/user/Product");
      setProductData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      // Eğer ürün sepette yoksa adetini 1 olarak ayarla, varsa bir artır
      const updatedCart = { ...prevCart };
      updatedCart[product._id] = (updatedCart[product._id] || 0) + 1;
      // console.log(updatedCart)
      return updatedCart;

    });
  };
  const handleCheckout = () => {
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
            <button className='product-button added-basked' onClick={() => handleAddToCart(product)}>
              <p>{product.price}$</p>
            </button>
          </div>
        </div>
      ))}
      {/* <div className='checkout'>
        <button className='checkout-button' onClick={handleCheckout}>Checkout</button>
      </div> */}
    </div>
  );
}

export default ProductCard;
