function validatePassword(password) {
    if(password.length < 4 || password.length > 72) {
        return { validate: false, message: "A senha deve ter entre 4 e 72 dígitos" }
    } else {
        return { validate: true, message:"" }
    }
}
  
function validateCpf(cpf) {
    if(cpf.length !== 11) {
        return { validate: false, message: "O CPF deve conter 11 dígitos!" }
    } else {
        return { validate: true, message: "" }
    }
}

export { validatePassword, validateCpf };