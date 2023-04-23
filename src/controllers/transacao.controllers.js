import { db } from "../database/database.connection.js"

export async function entrada (req, res) {
    
    try {
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).send(error.message) 
    }
}

export async function saida (req, res) {
    
    try {
        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).send(error.message) 
    }
}