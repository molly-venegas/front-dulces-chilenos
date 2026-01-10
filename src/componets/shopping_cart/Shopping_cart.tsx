import "./Shopping_cart.css";
import { useCart } from "../../context/cart_context";
import { useState } from "react";

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

    // aqui se trabaja en formulario de pedido

    const [isOrderFormOpen, setIsOrderFormOpen] =useState(false);
    const openOrder = ()=>setIsOrderFormOpen(true);
    const closeOrder = ()=>setIsOrderFormOpen(false);

    //aqui se trabaja el envio de datos al formulario

    const [orderForm, setOrderForm] = useState({
        nombre:"",
        direccion:"",
        telefono:""
    });

    const [successMessage, setSuccessMessage] = useState <string>();

    const [errorMessage, setErrorMessage] = useState <string>();

    function handleChange(e:any)
    {
        const {name, value} = e.target;
        setOrderForm((prev) => ({ ...prev, [name]: value}))
    }

    async function handleSubmit(e:any){
        e.preventDefault();

        const payload={
            client: orderForm,
            cart: items.map((item)=>{
                return({
                    id: item.product.id,
                    name: item.product.name,
                    description: item.product.description,
                    price: item.product.price,
                    quantity: item.quantity
                }) 
            }),
            total: total
        }

        try {
            const response = await fetch("http://localhost:3003/api/pedido",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            await response.json();
            
            if(!response.ok) {
                throw new Error("error en el servidor");
            }
            
            setSuccessMessage ("envio exitoso");
            closeOrder();
        } catch (error) {
            setErrorMessage ("no se pudo enviar el pedido");
        }

    }

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
                            <button className="shopping_cart_create_button" onClick={openOrder}>crear pedido</button>
                        </div>
                    </div>
                )}
            </div>
            {isOrderFormOpen && (
                <div className="order_modal_backdrop">
                    <div className="order_modal">
                        <div className="order_modal_header">
                            <h3>ingrese los datos del pedido</h3>
                            <button className="order_modal_close" onClick={closeOrder}>X</button>
                        </div> 
                        <form className="order_modal_form" onSubmit={handleSubmit}>
                            <label className="order_modal_field">
                                <span>Nombre y Apellido</span>
                                <input type="text" name="nombre" onChange={handleChange} placeholder="ingrese su nombre"></input>
                            </label>
                            <label className="order_modal_field">
                                <span>Direccion y Comuna</span>
                                <input type="text" name="direccion" onChange={handleChange} placeholder="ej: av central"></input>
                            </label>
                            <label className="order_modal_field">
                                <span>Telefono</span>
                                <input type="tel" name="telefono" onChange={handleChange} placeholder="ej:+56..."></input>
                            </label>
                            {successMessage && (<div>{successMessage}</div>)}
                            {errorMessage && (<div>{errorMessage}</div>)}
                            <button className="order_modal_submit" type="submit">crear pedido</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}