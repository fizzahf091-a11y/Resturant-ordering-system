import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

  //  Load cart from localStorage
 const [cartItems, setCartItems] = useState(() => {
  const saved = localStorage.getItem('cartItems');
  return saved ? JSON.parse(saved) : [];
});

  //  Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Load wishlist from localStorage or empty array
  const [wishlistItems, setWishlistItems] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  // Load viewed items from localStorage or empty array
  const [viewedItems, setViewedItems] = useState(() => {
    const saved = localStorage.getItem('viewed');
    return saved ? JSON.parse(saved) : [];
  });

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Save viewed items to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('viewed', JSON.stringify(viewedItems));
  }, [viewedItems]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCartItems(prev =>
      prev.map(i => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(prev =>
      prev.map(i =>
        i.id === id
          ? { ...i, quantity: i.quantity > 1 ? i.quantity - 1 : 1 }
          : i
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  //  Clear Cart (NEW)
const clearCart = () => {
  setCartItems([]);
};

  // Wishlist functions
  const addToWishlist = (item) => {
    const alreadyInWishlist = wishlistItems.find(i => i.id === item.id);
    if (!alreadyInWishlist) {
      setWishlistItems(prev => [...prev, item]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(prev => prev.filter(i => i.id !== id));
  };

  // Viewed items functions
  const markAsViewed = (item) => {
    const alreadyViewed = viewedItems.find(i => i.id === item.id);
    if (!alreadyViewed) {
      setViewedItems(prev => [...prev, item]);
    }
  };

    // ✅ New: Remove a single viewed item
  const removeFromViewed = (id) => {
    setViewedItems(prev => prev.filter(i => i.id !== id));
  };

  //  Clear all viewed items
  const clearViewed = () => {
    setViewedItems([]);
  };

  //  Clear all wishlist items
  const clearWishlist = () => {
  setWishlistItems([]); 
};

// ✅ NEW: totalCartQuantity (badge k liye)
const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        viewedItems,
        markAsViewed,
        removeFromViewed,
        clearViewed,
        clearWishlist,
        clearCart,
        totalCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
