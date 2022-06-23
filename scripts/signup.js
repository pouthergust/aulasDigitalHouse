const form = document.querySelector("[data-form-signup]")
form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(form).entries())
    if (passwordConfirmValidation(data.password, data.passwordConfirm)) {
        delete data.passwordConfirm
        await registerUser(data)
    }
})

function passwordConfirmValidation(password, passwordConfirm) {
    if (password !== passwordConfirm) {
        const passwords = document.querySelectorAll("[data-password]")
        passwords.forEach((input) => {
            input.classList.add("invalidInput")
        })
        alert('As senhas devem ser iguais')
        return false
    }

    return true
}

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
                alert("Usuario já cadastrado!")
                throw new Error("Usuario já cadastrado")
            }

            alert("Usuario cadastrado com sucesso!")
            localStorage.setItem("jwt", JSON.stringify(jwt))
            location.href = "/index.html"
        })
        .catch((err) => console.error(err.message))
}