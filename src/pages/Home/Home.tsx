import "./Home.css"
import { Header } from "../../componets/header/Header"
import { Menu } from "../../componets/menu/Menu"
import { Product_catalog } from "../../componets/product_catalog/Product_catalog"
import { Shopping_cart } from "../../componets/shopping_cart/Shopping_cart"
import { Contact } from "../../componets/contact/Contact"
import { Footer } from "../../componets/footer/Footer"

export function Home(){
    return(
        <div className="home">
            <Menu />
            <Header />
            <Product_catalog />
            <Shopping_cart />
            <Contact />
            <Footer />
        </div>
    )
}