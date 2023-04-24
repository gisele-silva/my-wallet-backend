import { db } from "../database/database.connection.js"
import { transacaoSchema } from "../schemas/transacao.schema.js"
import dayjs from "dayjs"

export async function operacaoEntradaSaida (req, res) {
    const {valor, descricao, tipo} = req.body
   
    const validation = transacaoSchema.validate(req.body, { abortEarly: false })
    if(validation.error){
        const errors = validation.error.map((detail) => detail.message)
        return res.status(422).send(errors)
    }

    try {
        const { user } = res.locals
        await db.collection("transacao").insertOne({valor, descricao, tipo, userId: user._id, createAt: dayjs().format("DD/MM")})
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).send(error.message) 
    }
}

export async function mostrarOperacao (req, res) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")
    if(!token) return res.status(401).send("Token inexistente")

    try {
       
        const sessao = await db.collection("sessao").findOne({ token })
        if (!sessao) return res.status(401).send("Token inválido")
        
        const usuario = await db.collection("users").findOne({_id: new ObjectId(sessao.userId)})
        delete usuario.senha
        
        const transacoes = await db.collection("transacoes").find({userId: user._id}).toArray()

        return res.status(200).send(usuario, transacoes)
    } catch (error) {
        return res.status(500).send(error.message) 
    }
}