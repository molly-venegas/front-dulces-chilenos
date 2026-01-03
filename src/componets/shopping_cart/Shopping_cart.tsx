import "./Shopping_cart.css"

type ShoppingCartProps ={
    isOpen: boolean;
    onClose: ()=>void;
}

export function Shopping_cart({isOpen, onClose}:ShoppingCartProps) {
    return (
        <div className="shopping_cart">
            <h1>carrito</h1>
        </div>
    )
}