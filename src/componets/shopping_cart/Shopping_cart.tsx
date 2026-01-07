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
        {isOpen && <div className="shopping_cart_backdrop" onClick={onClose}/>}
            <div className={`shopping_cart ${isOpen ? "shopping_cart--open" :""}`}> 
                <div className="shopping_cart_header"> 
                    <h2 className="carrito">CARRITO</h2>
                    <button className ="close_button" onClick={onClose} type="button">X</button>
                </div>
                {!hasItem ? (
                    <p>no tienes productos en el carrito.</p>
                ):(
                    <div className="shopping_cart_body">
                        <div className="shopping_cart_content">
                        <ul className="cart_list">
                            {items.map(({product, quantity})=>(
                             <li className="cart_item">
                                <div className="cart_item_details"> 
                                    <img src={product.image} alt={product.alt}></img>
                                    <h3> {product.name} </h3>
                                </div>

                                <div className="cart_item_number">
                                    <span>cantidad</span>
                                    <strong> {quantity} </strong>
                                </div>

                                <div className="cart_item_number">
                                    <span>subtotal</span>
                                    <strong> {product.price * quantity} </strong>
                                </div>
                             </li>
                            ))}
                        </ul>
                        <div className="shopping_cart_summary">
                            <div className="shopping_cart_total_cart">
                                <strong>total</strong>
                                <strong>{total}</strong>    
                            </div> 
                        </div>
                        </div>
                        <div className="shopping_cart_actions">
                            <button className="shopping_cart_create_button">crear pedido</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}