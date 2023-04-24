import { Router } from "express"
import { mostrarOperacao, operacaoEntradaSaida } from "../controllers/transacao.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { transacaoSchema } from "../schemas/transacao.schema.js";

const transacaoRouter = Router()

transacaoRouter.post("/nova-transacao/:tipo", validateSchema(transacaoSchema), operacaoEntradaSaida)
transacaoRouter.get("/transacao", mostrarOperacao)

export default transacaoRouter