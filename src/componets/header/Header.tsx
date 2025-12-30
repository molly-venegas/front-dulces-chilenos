import "./Header.css"
import logo from "../../assets/logo.png";

export function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo" className="logo"/>
            <br />
            <p>Delicias artesanales con un toque casero y auténtico sabor.</p>
        </div>
    )
}