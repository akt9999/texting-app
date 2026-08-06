import Auth_Form from "../components/Auth_form";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

function Login(){
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const fields = [
        {id: "email", label: "Email", type: "email", func: setEmail},
        {id: "password", label: "Password", type: "password", func: setPassword}
    ]

    async function handleSubmit(e){
        e.preventDefault();

        const response = await fetch(API_URL + "/auth/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        const data = await response.json()
        console.log(data)

        if(response.ok){
            navigate("/")
        }
    }

    return(
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <Auth_Form fields={fields} submit_type={handleSubmit} submit_text={"Login"} title={"Login"}/>
        </>
    )
}

export default Login;