import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    fetchProducts();
    if (localStorage.getItem('auth-token')) {
      fetchCart();
    }
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://tribaloobackend.onrender.com/allproducts');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCart = async () => {
    try {
      const response = await fetch('https://tribaloobackend.onrender.com/getcart', {
        method: 'POST',
        headers: {
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      setCartItems(data || {});
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const addToCart = async (itemId) => {
    if (!localStorage.getItem('auth-token')) {
      alert("Please login to add items to cart");
      return;
    }

    const newCartItems = { ...cartItems };
    newCartItems[itemId] = (newCartItems[itemId] || 0) + 1;
    setCartItems(newCartItems);

    try {
      await fetch('https://tribaloobackend.onrender.com/addtocart', {
        method: 'POST',
        headers: {
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId })
      });
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const removeFromCart = async (itemId) => {
    const newCartItems = { ...cartItems };
    if (newCartItems[itemId] > 0) {
      newCartItems[itemId] -= 1;
      setCartItems(newCartItems);

      try {
        await fetch('https://tribaloobackend.onrender.com/removefromcart', {
          method: 'POST',
          headers: {
            'auth-token': localStorage.getItem('auth-token'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ itemId })
        });
      } catch (error) {
        console.error("Error updating cart:", error);
      }
    }
  };

  const getTotalCartAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const item = products.find(product => product.id === Number(itemId));
      return total + (item?.new_price || 0) * (cartItems[itemId] || 0);
    }, 0);
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  };

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
