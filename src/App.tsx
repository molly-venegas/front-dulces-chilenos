import './App.css'
import { Home } from './pages/Home/Home'
import { Footer } from './componets/footer/Footer';
import { Menu } from './componets/menu/Menu';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Catalog } from './pages/Catalog/Catalog';
import { Contact } from './pages/Contact/Contact';
import { CartProvider } from './context/cart_context';
import {useState } from 'react';
import { Shopping_cart } from './componets/shopping_cart/Shopping_cart';
import { OrderSuccess } from './pages/OrderSuccess/OrderSuccess';

function Storefront() {
  return (
    <>
      <section id="inicio" className="page-section"><Home /></section>
      <section id="productos" className="page-section"><Catalog /></section>
      <section id="contacto" className="page-section"><Contact /></section>
    </>
  );
}

function App() {

  const [isCartOpen, setIsCartOpen] =useState(false);
  const openCart = ()=>setIsCartOpen(true);
  const closeCart = ()=>setIsCartOpen(false);

  return(
  <CartProvider>
  <div>
  <Menu onCartClick={openCart} />
  <Routes>
    <Route path='/' element={<Storefront />} />
    <Route path='/pedido_creado/:orderId' element={<OrderSuccess />} />
    <Route path='*' element={<Navigate to="/" replace />} />
  </Routes>
  <Footer />
  <Shopping_cart isOpen={isCartOpen} onClose={closeCart}/> 
</div>
</CartProvider>
);
}

export default App
