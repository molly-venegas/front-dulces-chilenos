import { useState } from "react";
import "./Contact_form.css"

export function Contact_form() {

    const [form , setForm] = useState ({
        name: "",
        email:"",
        message: "",
    })

    const [successMessage, setSuccessMessage] = useState <string>();

    const [errorMessage, setErrorMessage] = useState <string>();

    
    function handleChange(e:any)
    {
        const {name, value} = e.target;
        setForm((prev) => ({ ...prev, [name]: value}))
    }

    async function handleSubmit(e:any){
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3003/api/contact",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            await response.json();
            
            if(!response.ok) {
                throw new Error("error en el servidor");
            }
            
            setSuccessMessage ("envio exitoso");
        } catch (error) {
            setErrorMessage ("no se pudo enviar formulario");
        }

    }
    
    return (
        <div className="contact">
            <h1>contacto</h1>
            {successMessage && (<div>{successMessage}</div>)}
            {errorMessage && (<div>{errorMessage}</div>)}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} placeholder="ingrese su nombre..."/>
                <input type="text" name="email" onChange={handleChange} placeholder="ingrese su correo..."/>
                <textarea name="message" id="" onChange={handleChange} placeholder="ingrese su mensaje..."></textarea>
                <button type="submit">enviar</button>
            </form>
        </div>
    )
}