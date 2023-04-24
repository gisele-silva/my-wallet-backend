import { db } from "../database/database.connection"

export async function authValidation(req, res, next){
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")
    if(!token) return res.status(401).send("Token inexistente")

    try {
       
        const sessao = await db.collection("sessao").findOne({ token })
        if (!sessao) return res.status(401).send("Token inválido")
        
        /*const usuario = await db.collection("users").findOne({_id: new ObjectId(sessao.userId)})
        delete usuario.senha
        */
        res.locals.sessao = sessao
        
        next()
    } catch (error) {
        return res.status(500).send(error.message) 
    }
}