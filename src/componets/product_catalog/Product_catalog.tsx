import "./Product_catalog.css"
import {products} from "./../../data/products"
import {useCart} from "../../context/cart_context"

export function Product_catalog() {
    const {addItem, removeItem, getQuantity}= useCart();

    return (
        <div className="product_catalog">
            <p className="section-kicker">Nuestra selección</p>
            <h1>Productos</h1>
            <p className="section-description">Dulces recién preparados para acompañar tus momentos favoritos.</p>
            <div className="product_grid">
                {products.map((product)=>{
                    const quantity = getQuantity(product.id);
                    return(
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.alt}/>
                        <h2>{product.name}</h2>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">${product.price.toLocaleString("es-CL")}</p>
                        <div className="product_actions">
                            <button 
                                type="button"
                                onClick={()=>removeItem(product)}
                                disabled={quantity===0}>
                                −
                            </button>
                            <p>{quantity}</p>
                            <button 
                                type="button"
                                onClick={()=>addItem(product)}>
                                +
                            </button>
                            </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
