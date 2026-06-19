import React from 'react';
import { useCart } from '../navbar/context/CartContext';
import menuItems from './data.json';


const Menu = () => {
  const { addToCart, addToWishlist, markAsViewed } = useCart();


  return (
    <section className="Menu" id="menu">
      <h1 className="heading">
        our <span>menu</span>
      </h1>
      <div className="box-container">
        {menuItems.map((item) => (
          <div className="box" key={item.id}>
            <div className="icons">
              <span
                className="bi bi-cart3"
                onClick={() => addToCart(item)}
                title="Add to Cart"
              ></span>

              <span
                className="bi bi-heart"
                onClick={() => addToWishlist(item)}
                title="Add to Wishlist"
              ></span>

              <span
                className="bi bi-eye"
                onClick={() => markAsViewed(item)}
                title="Mark as Viewed"
              ></span>
            </div>


            <div className="image">
              {/* img src jo data.json me hai directly use karein */}
              <img src={item.image} alt={item.name} />
            </div>

            <div className="content">
              <h3>{item.name}</h3>
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </div>
            </div>

            <div className="price">
              Only RS: {item.price}/- <span>{item.originalPrice}/-</span>
            </div>

            {/* <button
              className="add to cart"
              onClick={() => addToCart(item)}
            >
              Add To Cart
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
