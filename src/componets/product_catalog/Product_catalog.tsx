import "./Product_catalog.css"

export function Product_catalog() {
    return (
        <div className="product_catalog">
            <h1>Productos</h1>
            <div className="product_grid"> 
                <div className="product">
                    <img src="../../../alfajores.jpeg"/>
                    <h3>Alfajores</h3>
                    <p>$3.000</p>
                </div>
                    <div className="product">
                    <img src="../../../cachitos.jpeg"/>
                    <h3>cachitos</h3>
                    <p>$3.000</p>
                </div>                
                    <div className="product">
                    <img src="../../../chilenitos.jpeg"/>
                    <h3>Alfajores</h3>
                    <p>$3.000</p>
                </div>                
                    <div className="product">
                    <img src="../../../alfajores.jpeg"/>
                    <h3>Alfajores</h3>
                    <p>$3.000</p>
                </div>                
                    <div className="product">
                    <img src="../../../alfajores.jpeg"/>
                    <h3>Alfajores</h3>
                    <p>$3.000</p>
                </div>
            </div>
        </div>
    )
}