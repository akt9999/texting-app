import "../css/auth_form.css"
import { useState } from "react";

function Auth_Form({fields,submit_type, submit_text, title}){

    return(
        <form className="form" onSubmit={submit_type}>
            <h1>{title}</h1>
            {fields.map((field) => (
                <div className="form-container" key={field.id}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        onChange={(e) => field.func(e.target.value)}
                        required
                    />
                </div>
            ))}

            <button type="submit">{submit_text}</button>
        </form>
    )
}

export default Auth_Form;