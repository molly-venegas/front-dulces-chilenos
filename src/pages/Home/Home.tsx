import "./Home.css"
import { Header } from "../../componets/header/Header"
import { Menu } from "../../componets/menu/Menu"
import { Product_catalog } from "../../componets/product_catalog/Product_catalog"
import { Shopping_cart } from "../../componets/shopping_cart/Shopping_cart"
import { Contact } from "../../componets/contact/Contact"
import { Footer } from "../../componets/footer/Footer"
import { Route, Routes } from "react-router-dom"

export function Home(){
    return(
        <div className="home">
            <Menu />
            <Routes>
                <Route path="/" element={<h1>inicio</h1>} />
                <Route path="/productos" element={<h1>productos</h1>} />
                <Route path="/pedido" element={<h1>pedido</h1>} />
                <Route path="/contacto" element={<h1>contacto</h1>} />
            </Routes>
            <Header />
            <Product_catalog />
            <Shopping_cart />
            <Contact />
            <Footer />
        </div>
    )
}