import "./Menu.css"

type MenuProp ={
    onCartClick: ()=>void;
}

export function Menu({onCartClick}: MenuProp) {
    return (
        <div className="menu">
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
            <div className="cart_button" onClick={onCartClick}>
                <a>🛒</a>
            </div>
        </div>
    )
}
