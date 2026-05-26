import { ShoppingBag, X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cartItems, removeFromCart, cartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    const itemsText = cartItems.map(item => `- ${item.title} (SKU: ${item.sku}) - ${item.price}`).join('\n');
    const message = `Hi Dharastuti Art, I'd like to purchase the following items:\n\n${itemsText}\n\nTotal: ${cartTotal}\n\nPlease let me know the next steps for payment and shipping.`;
    
    const waLink = `https://wa.me/918980846362?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <div className="cart-header-left">
            <ShoppingBag size={20} />
            <h2 className="text-serif">Your Bag ({cartItems.length})</h2>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close cart">
            <X size={24} />
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p className="text-sans">Your bag is empty.</p>
              <button className="btn btn-outline" onClick={onClose}>Continue Shopping</button>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.images[0]} alt={item.title} />
                  </div>
                  <div className="cart-item-info">
                    <h3 className="text-serif">{item.title}</h3>
                    <p className="cart-item-sku text-sans">SKU: {item.sku}</p>
                    <p className="cart-item-price text-sans">{item.price}</p>
                  </div>
                  <button 
                    className="icon-btn remove-btn" 
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.title}`}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary">
              <div className="cart-total-row">
                <span className="text-sans">Subtotal</span>
                <span className="cart-total-price text-sans">{cartTotal}</span>
              </div>
              <p className="cart-shipping-note text-sans">Shipping calculated at checkout</p>
            </div>
            <div className="cart-footer-actions">
              <button className="btn btn-primary btn-full" onClick={handleCheckout}>
                Checkout via WhatsApp
              </button>
              <button className="btn-text clear-btn" onClick={clearCart}>Clear All</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}