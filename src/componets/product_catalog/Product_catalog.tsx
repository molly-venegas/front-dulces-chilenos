import "./Product_catalog.css"
import {products} from "./../../data/products"

export function Product_catalog() {
    return (
        <div className="product_catalog">
            <h1>Productos</h1>
            <div className="product_grid">
                {products.map((product)=>{
                    return(
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.alt}/>
                        <h2>{product.name}</h2>
                        <h3>{product.description}</h3>
                        <p>${product.price}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}