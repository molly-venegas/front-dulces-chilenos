import './App.css'
import { Home } from './pages/Home/Home'
import { Header } from './componets/header/Header';
import { Footer } from './componets/footer/Footer';
import { Menu } from './componets/menu/Menu';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Catalog } from './pages/Catalog/Catalog';
import { Contact } from './pages/Contact/Contact';

function App() {
  return(
  <div>
  <Menu />
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/catalog' element={<Catalog />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='*' element={<Navigate to="/" replace />} />
  </Routes>
  <Footer />
</div>);
}

export default App