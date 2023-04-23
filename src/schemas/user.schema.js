import joi from "joi"

const cadastroSchema = joi.obect({
    nome: joi.string().required(),
    email: joi.string().email().required(),
    senha: joi.string().min(3).required(),
    repeteSenha: joi.ref('senha').required()
})

export default cadastroSchema