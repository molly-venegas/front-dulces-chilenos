import "./Product_catalog.css"
import alfajores from "../../assets/alfajores.jpeg";
import cachitos from "../../assets/cachitos.jpeg";
import chilenitos from "../../assets/chilenitos.jpeg";
import mendocinosCocktail from "../../assets/mendocinos-cocktail.jpeg";
import mendocinosGrandes from "../../assets/mendocinos-grandes.jpeg";

export function Product_catalog() {
    return (
        <div className="product_catalog">
            <h1>Productos</h1>
            <div className="product_grid"> 
                <div className="product">
                    <img src={alfajores} alt="Alfajores"/>
                    <h2>alfajores</h2>
                    <h3>caja de 6 unidades</h3>
                    <p>$3.000</p>
                </div>
                    <div className="product">
                    <img src={cachitos} alt="Cachitos"/>
                    <h2>cachitos</h2>
                    <h3>caja de 8 unidades</h3>
                    <p>$3.000</p>
                </div>                
                    <div className="product">
                    <img src={chilenitos} alt="Chilenitos"/>
                    <h2>chilenitos</h2>
                    <h3>caja de 4 unidades</h3>
                    <p>$3.000</p>
                </div>                
                    <div className="product">
                    <img src={mendocinosCocktail} alt="Mendocinos cocktail"/>
                    <h2>mendocino cocktail</h2>
                    <h3>caja de 8 unidades</h3>
                    <p>$3.000</p>
                </div>                
                    <div className="product">
                    <img src={mendocinosGrandes} alt="Mendocinos grandes"/>
                    <h2>mendocinos grandes</h2>
                    <h3>caja de 4 unidades</h3>
                    <p>$3.000</p>
                </div>
            </div>
        </div>
    )
}