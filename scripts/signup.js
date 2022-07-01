import {
    checkFields
} from "./utils.js"

let userInfo = {}

const form = document.querySelector("[data-form-signup]")
form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const data = userInfo
    if (data) {
        delete data.passwordConfirm
        await registerUser(data)
    }
})

const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('keyup', ({target}) => {
        const {value, name} = target
        userInfo[name] = value
        checkFields(userInfo, 'signup')
    })
})

async function registerUser(user) {
    const options = {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(user)
    }
 
    await fetch("https://ctd-todo-api.herokuapp.com/v1/users", options)
        .then((res) => res.json())
        .then(({ jwt }) => {
            if (!jwt) {
                alert("Usuario já cadastrado! Sou um alerta")
                throw new Error("Usuario já cadastrado! Sou um print no console")
            }

            alert("Usuario cadastrado com sucesso!")
            localStorage.setItem("jwt", JSON.stringify(jwt))
            location.href = "/index.html"
        })
        .catch((err) => console.error(err.message))
}