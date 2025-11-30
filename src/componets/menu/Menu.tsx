import { Link } from "react-router-dom"
import "./Menu.css"

export function Menu() {
    return (
        <div className="menu">
            <ul>
                <li><Link to="/">inicio</Link></li>
                <li><Link to="/productos">productos</Link></li>
                <li><Link to="/pedido">pedido</Link></li>
                <li><Link to="/contacto">contacto</Link></li>
            </ul>
            <div className="cart_button">
                <a href="www.google.com">🛒</a>
            </div>
        </div>
    )
}