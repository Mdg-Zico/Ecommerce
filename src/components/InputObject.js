const InputObject = [
    {
        class: "signup-input",
        type: "text",
        placeholder: "Name"
    },

    {
        class: "signup-input",
        type: "text",
        placeholder: "Email or Phone number",
        pattern: "([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|[0-9()+\- ]+)"
    },

    {
        class: "signup-input",
        type: "password",
        placeholder: "Password"
    }

]

export default InputObject;