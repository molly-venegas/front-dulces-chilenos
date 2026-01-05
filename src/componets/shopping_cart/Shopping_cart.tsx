import "./Shopping_cart.css"
import { useCart } from "../../context/cart_context"

type ShoppingCartProps ={
    isOpen: boolean;
    onClose: ()=>void;
}

export function Shopping_cart({isOpen, onClose}:ShoppingCartProps) {

    const {items} = useCart();
    let total = 0;

    for (const item of items) {
        total += item.product.price * item.quantity;
    }      

    const hasItem = items.length >0;

    console.log (total);

    return (
        <div>
        {isOpen && <div className="shopping_cart" onClick={onClose}/>}
            <div> 
                <div className="shopping_cart_header"> 
                    <h2>carrito</h2>
                    <button>X</button>
                </div>
                {!hasItem ? (
                    <p>no tienes productos en el carrito.</p>
                ):(
                    <div className="shopping_cart_body">
                        <div className="shopping_cart_content">
                        <ul className="cart_list">
                            {items.map(({product, quantity})=>{})}
                            <li></li>
                        </ul>
                        </div>
                        <div className="shopping_cart_action">
                            <button>crear pedido</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}