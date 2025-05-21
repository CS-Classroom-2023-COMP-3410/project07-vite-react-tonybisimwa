import { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => {
      const item = prev.find(p => p.id === productId);
      if (!item) return prev;
      if (item.quantity > 1) {
        return prev.map(p =>
          p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
        );
      }
      return prev.filter(p => p.id !== productId);
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return <ProductsPage addToCart={addToCart} />;
      case 'profile':
        return <ProfilePage />;
      case 'cart':
        return <CartPage cartItems={cartItems} onRemoveFromCart={removeFromCart} />;
      case 'home':
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Header currentPage={currentPage} onNavigate={setCurrentPage} cartCount={totalItems} />
      <main style={{ padding: '20px' }}>{renderPage()}</main>
    </div>
  );
}

export default App;
