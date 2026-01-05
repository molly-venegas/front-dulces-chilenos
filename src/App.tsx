import './App.css'
import { Home } from './pages/Home/Home'
import { Header } from './componets/header/Header';
import { Footer } from './componets/footer/Footer';
import { Menu } from './componets/menu/Menu';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Catalog } from './pages/Catalog/Catalog';
import { Contact } from './pages/Contact/Contact';
import { CartProvider } from './context/cart_context';
import {useState } from 'react';
import { Shopping_cart } from './componets/shopping_cart/Shopping_cart';

function App() {

  const [isCartOpen, setIsCartOpen] =useState(false);
  const openCart = ()=>setIsCartOpen(true);
  const closeCart = ()=>setIsCartOpen(false);

  return(
  <CartProvider>
  <div>
  <Menu onCartClick={openCart} />
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/catalog' element={<Catalog />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='*' element={<Navigate to="/" replace />} />
  </Routes>
  <Footer />
  <Shopping_cart isOpen={isCartOpen} onClose={closeCart}/> 
</div>
</CartProvider>
);
}

export default App