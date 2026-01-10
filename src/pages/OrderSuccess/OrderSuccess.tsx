import { useParams } from "react-router-dom"
import "./OrderSuccess.css"

export function OrderSuccess(){
    const {orderId} = useParams ();
    const whatsAppMessage = `Mi pedido es ${orderId}`;
    const whatsAppLink = `https://wa.me/56967372770?text=${encodeURIComponent(whatsAppMessage)}`;

    return(
        <div className="order_success">
            <h1>pedido creado con exito</h1>
            <p>numero de pedido #{orderId}</p>
            <a className="order_success_button" href={whatsAppLink} target="_blank">contactar por whatsApp</a>
        </div>
    )
}