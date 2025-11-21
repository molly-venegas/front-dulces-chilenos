import "./Home.css"

import { Header } from "../../componets/header/Header"
export function Home(){
    return(
        <div className="home">
            <Header />
            <main>
                <h2>cuerpo del sitio</h2>
            </main>
        </div>
    )
}