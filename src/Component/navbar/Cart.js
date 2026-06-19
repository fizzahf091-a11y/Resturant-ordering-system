import React, { useRef } from 'react';           // yaha useRef sirf icon badge ki div ke liye use kar rahe h
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { useCart } from './context/CartContext';
import { MdDelete } from "react-icons/md";

const Cart = ({ cartRef, cartHandler }) => {
  const {
    cartItems,
    removeFromCart, 
    increaseQuantity,
    decreaseQuantity,
    totalCartQuantity
  } = useCart();

  // const navigate = useNavigate();       // ✅ Hook to navigate programmatically
 
  const handleCloseAndNavigate = () => {
    cartHandler();                        // ✅ Close the cart
    // navigate('/wishlist');             // ✅ Navigate to /wishlist
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      
      <div className="bi bi-cart3 cart-icon" onClick={cartHandler} style={{ position: 'relative', cursor: 'pointer' }}>
        {/* cart bagde add krny k liye r ye icon ki div m add krty hn */}
         {/*  Badge me totalCartQuantity */}
        {totalCartQuantity > 0 && (
          <span className="cart-count">{totalCartQuantity}</span>
        )}
      </div>

      {/* <Link to="/cart" style={{ position: 'relative', cursor: 'pointer', display: 'inline-block' }}>
        <div className="bi bi-cart3 cart-icon"> */}
          {/* cart badge add karne ke liye yeh icon wali div mein */}
          {/* {totalCartQuantity > 0 && (
            <span className="cart-count">{totalCartQuantity}</span>
          )}
        </div>
      </Link> */}

      <div className='cart-items-container' ref={cartRef}>
        {cartItems.length === 0 ? (
          <p className="empty-cart" style={{ fontSize: "1.8rem" }}>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className='cart-item' key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "5px"
                  }}
                />
                <div className='content'>
                  <h3>{item.name}</h3>
                  <div className='price'>Only RS: {item.price}/-</div>
                  <div className='quantity-controls'>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      <MdDelete
                       size={21} color="red"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="cart-total" style={{
              fontSize: "1.6rem",
              color: "#13131a",
              padding: "1rem 0",
              textAlign: "center",
              borderTop: "1px solid #ccc",
              marginTop: "1rem"
            }}>
              <h4>Total: RS {cartTotal}/-</h4>
            </div>

          </>
        )}

        <div className='cart-footer-buttons' style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem',marginBottom: '1rem' }}>
          <button  className="btn" style={{ padding: '0.5rem 1rem', fontSize: '1.7rem', color: 'black', backgroundColor: 'white' }} onClick={handleCloseAndNavigate}>
            Close
          </button>
          <Link className='btn' to="/checkout" style={{ padding: '0.5rem 1rem', fontSize: '1.7rem' }}>
            Checkout Now
          </Link> 
        </div>

        <Link  to="/viewed"  className='btn' style={{ marginTop: '1rem',marginBottom: '1rem', display: 'block', textAlign: 'center', fontSize: '1.7rem' }}>
          Viewed
        </Link>
      </div>
    </>
  );
};

export default Cart;