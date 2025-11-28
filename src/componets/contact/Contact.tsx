import { useState } from "react";
import "./Contact.css"

export function Contact() {
    const [form , setForm] = useState ({
        name: "",
        email:"",
        message: "",
    })
    
function handleChange(e){
    console.log ("evento de cambio");
    console.log ("target name", e.target.name);
    console.log ("target value", e.target.value);
    const {name, value} = e.target;
    setForm((prev) => ({ ...prev, [name]: value}))
}
    function handleSubmit(e){
        e.preventDefault();
        console.log("hola")
        console.log("nombre del formulario:", form.name)
        console.log("correo del formulario:", form.email)
        console.log("mensaje del formulario:", form.message)

    }
    return (
        <div className="contact">
            <h1>contacto</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} placeholder="ingresa tu nombre..."/>
                <input type="text" name="email" onChange={handleChange} placeholder="ingresa tu correo..."/>
                <textarea name="message" id="" onChange={handleChange} placeholder="ingresa tu mensaje..."></textarea>
                <button type="submit">enviar</button>
            </form>
        </div>
    )
}