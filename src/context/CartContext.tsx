import React, { createContext, useContext, useState, useEffect } from 'react';
import { Artwork } from '../data/mockData';

interface CartItem extends Artwork {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (artwork: Artwork) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartTotal: string;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('dharastuti-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem('dharastuti-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (artwork: Artwork) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === artwork.id);
      if (existingItem) return prev; // Since art is 1-of-1, we don't increment quantity
      return [...prev, { ...artwork, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.length;

  const calculateTotal = () => {
    const total = cartItems.reduce((sum, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''));
      return sum + price;
    }, 0);
    return `₹${total.toLocaleString('en-IN')}`;
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      clearCart, 
      cartTotal: calculateTotal(),
      cartCount 
    }}>
      {children}
    </CartContext.Provider>
  );
};