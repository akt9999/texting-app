import Auth_Form from "../components/Auth_form";
import {Helmet} from "react-helmet"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){

    const navigate = useNavigate();

    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const fields = [
        {id: "name", label: "Name", type: "text", func: setName},
        {id: "email", label: "Email", type: "email", func: setEmail},
        {id: "password", label: "Password", type: "password", func: setPassword}
    ]

    async function handleSubmit(e){
        e.preventDefault()

        const response = await fetch("https://texting-app-backend-pdgwiile6-arnav-a35e.vercel.app/auth/signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                name: name,
                password: password
            })
        });

        if(response.ok){
            navigate("/")
        }
    }
    
    return(
        <>
            <Helmet>
                <title>Signup</title>
            </Helmet>
            <Auth_Form fields={fields} submit_type={handleSubmit} submit_text={"Signup"} title={"Signup"}/>
        </>
    )
}
export default Signup;