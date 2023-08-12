import '../componentsCSS//ProductCard.css';

function ProductCard() {
  return (
      <div className='product-card'>
        <div className='product-image'></div>
        <div className='product-title'>Cool Breeze Cocktail</div>
        <div className='product-description'>
          <p>45 ml (1 1/2 ons) Vodka</p>
          <p>30 ml (1 ons) Blue Curaçao likörü</p>
          <p>30 ml (1 ons) Ananas Suyu</p>
          <p>15 ml (1/2 ons) Limon Suyu</p>
          <p>Buz</p>
        </div>
        <div className='product-button'><p>50$</p></div>
      </div>
  );
}

export default ProductCard;
