import { db } from "../database/database.connection.js"
import dayjs from "dayjs"

export async function operacaoEntradaSaida (req, res) {
    const {valor, descricao, tipo} = req.body
   
    /*const validation = transacaoSchema.validate(req.body, { abortEarly: false })
    if(validation.error){
        const errors = validation.error.map((detail) => detail.message)
        return res.status(422).send(errors)
    }*/

    try {
        const { user } = res.locals
        const sessao = res.locals.sessao
        await db.collection("transacao").insertOne({valor, descricao, tipo, userId: sessao._id, createAt: dayjs().format("DD/MM")})
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).send(error.message) 
    }
}

export async function mostrarOperacao (req, res) {
   
    try {
        
        const sessao = res.locals.sessao
        const transacoes = await db.collection("transacoes").find({userId: sessao._id}).toArray()

        return res.status(200).send(transacoes)
    } catch (error) {
        return res.status(500).send(error.message) 
    }
}