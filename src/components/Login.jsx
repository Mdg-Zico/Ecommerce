import React from "react";
import Input from "./Input";


export default function Login(){
return(
    <div>
    <Input
        ClassName = "signup-input"
        type = "text"
        placeholder = "Email or Phone Number"
    />
    <Input
        ClassName = "signup-input"
        type = "text"
        placeholder = "password"
    />

    </div>
)
}