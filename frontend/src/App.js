import { FaBackspace, FaBackward, FaFastBackward, FaFirstdraft, FaLastfm, FaLastfmSquare, FaStepBackward } from 'react-icons/fa';
import './App.css';
import ProductCard from './componentsJS/ProductCard';
function App() {
 return(
   <div className='home-page'>
      <div className='container-information'>
         <div className='boxInContainer'>
            <div className='imageInBox'></div>
            <div className='textInBox'><p>            Hoş geldiniz! tt CAFE olarak, sıcak atmosferimiz ve eşsiz lezzetlerimizle unutulmaz anlar yaşatmak için buradayız. Günün yorgunluğunu atmanız ve keyif dolu anlar yaşamanız için en özel kahve çeşitleri, taze içecekler ve lezzetli atıştırmalıklarla sizi ağırlıyoruz.</p></div>
         </div>
         <div className='boxInContainer'>
            
            <div className='textInBox Two' ><p>             Sevdiklerinizle güzel bir sohbet eşliğinde kahvenizi yudumlamak, lezzetli tatlılarımızın tadına bakmak veya günün her saatinde taze sandviçlerimizi denemek için sizi bekliyoruz. Kahve tutkunlarından atıştırmalık sevenlere kadar herkes için bir şeyler bulabileceğiniz geniş menümüzle sizleri ağırlamaktan mutluluk duyacağız.</p></div>
            <div className='imageInBox Two'></div>
         </div>
         <div className='boxInContainer'>
            <div className='imageInBox'></div>
            <div className='textInBox'><p>            Güler yüzlü ekibimiz ve rahatlatıcı ambiyansımızla tt CAFE, sizleri ağırlamaktan ve güzel anlarınıza eşlik etmekten büyük bir keyif alıyor. Hemen uğrayın, her anınıza tat katacak lezzetli mola için bize katılın!
             Size unutulmaz anlar yaşatmak için buradayız. Sıcak bir gülümseme ve lezzetli bir içecekle tanışmak için sabırsızlanıyoruz.</p></div>
         </div>
         
      </div>
      <div className='container-main'>
         <div className='container-top'>
            <div className='last-button'><FaBackward className='icon' style={{float:'left', cursor:'pointer'}} color='#ffd900' /></div>
            <div className='information-text'><p>Populate Product</p></div>
            <div className='next-button'><FaBackward className='icon' style={{float:'right', cursor:'pointer' , transform:'rotate(180deg)'}} color='#ffd900' /></div>
         </div>
         <div className='container-bottom'>
            <div className="boxInContainerOne">
               <ProductCard className="product-card" />
               <ProductCard className="product-card" />
               <ProductCard className="product-card" />
               <ProductCard className="product-card" />
               <ProductCard className="product-card" />
               <ProductCard className="product-card" />
               <ProductCard className="product-card" />
               <ProductCard className="product-card" />
            </div>
            <div className="boxInContainerTwo">
            <ProductCard className="product-card" />
            <ProductCard className="product-card" />
            <ProductCard className="product-card" />
            <ProductCard className="product-card" />
            <ProductCard className="product-card" />
            <ProductCard className="product-card" />
            <ProductCard className="product-card" />
            <ProductCard className="product-card" />
            </div>
         </div>
      </div>
   </div>
 )
}

export default App;
