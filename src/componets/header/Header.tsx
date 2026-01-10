import "./Header.css"
import logo from "../../assets/logo.png";

export function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo" className="logo" />

            <h2>Delicias artesanales con un toque casero y auténtico sabor.</h2>
            <p>Rellenos generosos y coberturas irresistibles.</p>
            <p>Elaborados artesanalmente para que cada bocado sea especial.</p>
        </div>
    )
}
