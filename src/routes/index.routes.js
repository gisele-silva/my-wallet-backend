import {Router} from "express"
import transacaoRouter from "./transacao.route.js"
import userRouter from "./user.route.js"

const router = Router()
router.use(userRouter)
router.use(transacaoRouter)

export default router