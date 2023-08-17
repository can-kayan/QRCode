import '../pagesCss/HomePage.css';
import ProductCard from '../componentsJS/ProductCard';
import React from "react";
import Footer from '../componentsJS/Footer';
import Header from '../componentsJS/Header'
function HomePage() {
 return(
   <div>
   <div className='home-page'>
      <div className='container-information'>
         <div className='boxInContainer'>
            <div className='imageInBox '></div>
            <div className='textInBox'><p>            Hoş geldiniz! tt CAFE olarak, sıcak atmosferimiz ve eşsiz lezzetlerimizle unutulmaz anlar yaşatmak için buradayız. Günün yorgunluğunu atmanız ve keyif dolu anlar yaşamanız için en özel kahve çeşitleri, taze içecekler ve lezzetli atıştırmalıklarla sizi ağırlıyoruz.</p></div>
         </div>
         <div className='boxInContainer'>
            <div className='textInBox ' ><p>             Sevdiklerinizle güzel bir sohbet eşliğinde kahvenizi yudumlamak, lezzetli tatlılarımızın tadına bakmak veya günün her saatinde taze sandviçlerimizi denemek için sizi bekliyoruz. Kahve tutkunlarından atıştırmalık sevenlere kadar herkes için bir şeyler bulabileceğiniz geniş menümüzle sizleri ağırlamaktan mutluluk duyacağız.</p></div>
            <div className='two'></div>
         </div>
         <div className='boxInContainer'>
            <div className='imageInBox'></div>
            <div className='textInBox'><p>            Güler yüzlü ekibimiz ve rahatlatıcı ambiyansımızla tt CAFE, sizleri ağırlamaktan ve güzel anlarınıza eşlik etmekten büyük bir keyif alıyor. Hemen uğrayın, her anınıza tat katacak lezzetli mola için bize katılın!
             Size unutulmaz anlar yaşatmak için buradayız. Sıcak bir gülümseme ve lezzetli bir içecekle tanışmak için sabırsızlanıyoruz.</p></div>
         </div>
         
      </div>
      <div className="container-main">
        <div className="container-top" >
          <div className='information-text'>
            <p>Populate Product</p>
          </div>
        </div>
        <div className={`container-bottom`}>
          <div className="box-container">
                  <ProductCard className="product-card" />
            </div>
         </div>
      </div>
     
   </div>
   </div>
 )
}


export default HomePage;
