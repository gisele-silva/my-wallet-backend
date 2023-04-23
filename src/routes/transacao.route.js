import { Router } from "express"
import { login, cadastro } from "../controllers/user.controllers.js";

const transacaoRouter = Router()

transacaoRouter.post("/nova-transacao/:tipo", cadastro)
transacaoRouter.post("/sign-in", login)

export default transacaoRouter