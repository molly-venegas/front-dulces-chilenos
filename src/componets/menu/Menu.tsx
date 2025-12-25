import { NavLink } from "react-router-dom"
import "./Menu.css"

export function Menu() {
    return (
        <div className="menu">
            <ul>
                <li><NavLink to="/">inicio</NavLink></li>
                <li><NavLink to="/catalog">productos</NavLink></li>
                <li><NavLink to="/pedido">pedido</NavLink></li>
                <li><NavLink to="/contact">contacto</NavLink></li>
            </ul>
            <div className="cart_button">
                <a href="www.google.com">🛒</a>
            </div>
        </div>
    )
}