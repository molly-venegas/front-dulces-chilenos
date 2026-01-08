import { NavLink } from "react-router-dom"
import "./Menu.css"

type MenuProp ={
    onCartClick: ()=>void;
}

export function Menu({onCartClick}: MenuProp) {
    return (
        <div className="menu">
            <ul>
                <li><NavLink to="/">inicio</NavLink></li>
                <li><NavLink to="/catalog">productos</NavLink></li>
                <li><NavLink to="/contact">contacto</NavLink></li>
            </ul>
            <div className="cart_button" onClick={onCartClick}>
                <a>🛒</a>
            </div>
        </div>
    )
}