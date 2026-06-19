import React, { useState } from 'react';
import { useCart } from './context/CartContext';
import { Link } from 'react-router-dom';
import { BsTrash, BsCart } from 'react-icons/bs';  // trash + cart icon

const Wishlist = ({ wishlistRef, wishlistHandler }) => {
  const { wishlistItems, removeFromWishlist, addToCart, clearWishlist } = useCart();
  const [hoveredImageId, setHoveredImageId] = useState(null);
  const [hoveredOverlayId, setHoveredOverlayId] = useState(null);

  const handleCloseAndNavigate = () => {
    wishlistHandler();
  };

  return (
    <div
      className="wishlist"
      ref={wishlistRef}
      style={{
      padding: '2rem',
      color: 'white',
      fontSize: '1.4rem',
      width: '35rem',
      maxHeight: '90vh',           // fix overall height
      display: 'flex',
      flexDirection: 'column'
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>My Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <div className="wishlist-empty">
          <p style={{ fontSize: '18px', color: '#ccc' }}>No items in wishlist.</p>
          <p>You don't have any products in the wishlist yet.</p>
          <p>You will find a lot of interesting products on our "Restaurant" page</p>
          <Link
            to="/menu"
            style={{
              fontSize: '18px',
              color: '#00adc0ff',
              textDecoration: 'underline',
              fontWeight: 'bold',
            }}
          >
            Go to Menu
          </Link>
        </div>
      ) : (
        <>
          <button
            onClick={clearWishlist}
            style={{
              marginBottom: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#f44336',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '5px',
              fontSize: '1.7rem',
              display: 'block',
              width: '100%',
            }}
          >
            Clear All
          </button>

          <div className="wishlist-box-container"  style={{
        flex: 1,
        overflowY: 'auto',
        paddingRight: '10px',
      }}>              {/* for scroll */}
            {wishlistItems.map((item) => (
              <div key={item.id} className="wishlist-box">
                <div className="wishlist-icons">
                  <BsTrash size={28}
                    onClick={() => removeFromWishlist(item.id)}
                    title="Remove from Wishlist"
                    style={{ cursor: 'pointer' }}
                  />
                  <span className="discount-badge">-{item.discount}%</span>
                </div>

                <div
                  className="wishlist-image"
                  onMouseEnter={() => setHoveredImageId(item.id)}
                  onMouseLeave={() => setHoveredImageId(null)}              
                >
                  <img src={item.image} alt={item.name} />
                  <div
                    className="quick-shop-overlay"
                    style={{ opacity: hoveredImageId === item.id ? 1 : 0 }}
                    onMouseEnter={() => setHoveredOverlayId(item.id)}
                    onMouseLeave={() => setHoveredOverlayId(null)}
                    onClick={() => addToCart(item)}
                  >
                    {hoveredOverlayId === item.id ? (
                      <BsCart size={24} />
                    ) : (
                      "Quick Shop"
                    )}
                  </div>
                </div>

                <div className="wishlist-content">
                  <h4>{item.name}</h4>
                  <p>Price: Rs {item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '1.2rem', color: '#ccc', marginTop: '1rem', textAlign: 'center' }}>
            Need help? Contact us anytime!
          </p>

          <button
            className="btn"
            style={{
              padding: '0.5rem 13rem',
              fontSize: '1.7rem',
              color: 'black',
              backgroundColor: 'white',
              textAlign: 'center',
              marginTop: '1rem',
            }}
            onClick={handleCloseAndNavigate}
          >
            Close
          </button>
        </>
      )}
    </div>
  );
};

export default Wishlist;
