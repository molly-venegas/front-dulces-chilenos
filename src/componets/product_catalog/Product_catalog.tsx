import "./Product_catalog.css"

export function Product_catalog() {
    return (
        <div className="product_catalog">
            <h1>Productos</h1>
            <div className="product_grid"> 
                <div className="product">
                    <img src="../../../alfajores.jpeg"/>
                    <h2>alfajores</h2>
                    <h3>caja de 6 unidades</h3>
                    <p>$3.000</p>
                </div>
                    <div className="product">
                    <img src="../../../cachitos.jpeg"/>
                    <h2>cachitos</h2>
                    <h3>caja de 8 unidades</h3>
                    <p>$3.000</p>
                </div>                
                    <div className="product">
                    <img src="../../../chilenitos.jpeg"/>
                    <h2>chilenitos</h2>
                    <h3>caja de 4 unidades</h3>
                    <p>$3.000</p>
                </div>                
                    <div className="product">
                    <img src="../../../mendocinos-cocktail.jpeg"/>
                    <h2>mendocino cocktail</h2>
                    <h3>caja de 8 unidades</h3>
                    <p>$3.000</p>
                </div>                
                    <div className="product">
                    <img src="../../../mendocinos-grandes.jpeg"/>
                    <h2>mendocinos grandes</h2>
                    <h3>caja de 4 unidades</h3>
                    <p>$3.000</p>
                </div>
            </div>
        </div>
    )
}