import cadastroSchema from "../schemas/user.schema.js"
import {db} from "../database/database.connection.js"
import bcrypt from "bcrypt"

export async function signup (req, res){
    const {nome, email, senha, confirmaSenha} = req.body

    const validation = cadastroSchema.validate(req.body, {abortEarly: false})
    if(validation.error){
        const errors = validation.error.map((detail) => detail.message)
        return res.status(422).send(errors)
    }

    try {
        const usuario = await db.collection("users").findOne({email})
        if(usuario) return res.status(409).send("Email já cadastrado")

        const hash = bcrypt.hashSync(senha, 10)
        await db.collection.insertOne({nome, email, senha: hash})
        res.sendStatus(200)
    } catch (error) {
        return res.status(500).send(error)
    }
}

export async function signin (req, res){
    
}