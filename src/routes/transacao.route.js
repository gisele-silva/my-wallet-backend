import { Router } from "express"
import { mostrarOperacao, operacaoEntradaSaida } from "../controllers/transacao.controllers.js";

const transacaoRouter = Router()

transacaoRouter.post("/nova-transacao/:tipo", operacaoEntradaSaida)
transacaoRouter.get("/transacao", mostrarOperacao)

export default transacaoRouter