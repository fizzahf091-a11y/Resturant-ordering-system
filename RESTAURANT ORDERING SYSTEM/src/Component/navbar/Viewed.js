import React, { useState } from 'react';
import { useCart } from './context/CartContext';
import { Link } from 'react-router-dom';
import { BsTrash, BsCart } from 'react-icons/bs';

const Viewed = () => {
  const { viewedItems, clearViewed, removeFromViewed, addToCart } = useCart();
  const [hoveredImageId, setHoveredImageId] = useState(null);
  const [hoveredOverlayId, setHoveredOverlayId] = useState(null);

  return (
    <div className="viewed">
      <h2 className="viewed-heading">
        Recently <span>Viewed</span>
      </h2>

      {viewedItems.length === 0 ? (
        <div className="viewed-empty">
          <p>No items viewed yet.</p>
          <p>You haven't viewed any products yet.</p>
          <p>Find something you like on our "Menu" page!</p>
          <Link to="/menu" className="go-menu-link">
            Go to Menu
          </Link>
        </div>
      ) : (
        <>
          <button onClick={clearViewed} className="clear-viewed-btn">
            Clear All
          </button>

          <div className="viewed-box-container">
            {viewedItems.map((item) => (
              <div key={item.id} className="viewed-box">
                
                {/* Top-left trash icon */}
                <div className="viewed-icons">
                  <BsTrash
                    size={28}
                    onClick={() => removeFromViewed(item.id)}
                    title="Remove from viewed"
                  />
                </div>

                {/* Image + overlay */}
                <div
                  className="viewed-image"
                  onMouseEnter={() => setHoveredImageId(item.id)}
                  onMouseLeave={() => { setHoveredImageId(null); setHoveredOverlayId(null); }}
                >
                  <img src={item.image} alt={item.name} />

                  <div
                    className="quick-shop-overlay"
                    style={{ opacity: hoveredImageId === item.id ? 1 : 1 }} // always visible
                    onMouseEnter={() => setHoveredOverlayId(item.id)}
                    onMouseLeave={() => setHoveredOverlayId(null)}
                    onClick={() => addToCart(item)}
                  >
                    {hoveredOverlayId === item.id ? <BsCart size={23} /> : <span className="viewed-text">Viewed</span>}
                  </div>
                </div>

                <div className="viewed-content">
                  <h4>{item.name}</h4>
                  <p>Price: Rs {item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="explore-more-text">Enjoy exploring more items!</p>
        </>
      )}
    </div>
  );
};

export default Viewed;






//  1 : 1           text always visible rhy ga r cursor jany py icon m change ho jay ga
//  0 : 1           text always visible rhy ga jesy hi cursor image py jay ga cursor k image py next move krny py text icon m change hoty hi foran sy hide ho jay ga
//  1 : 0           dono always hiden rhy gy jesy hi cursor jay ga icon show ho ga r jesy cursor k image sy back move py icon b text m change ho k foran sy hide ho jay ga