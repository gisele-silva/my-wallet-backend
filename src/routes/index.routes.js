import {Router} from "express"
import receitasRouter from "./receitas.routes.js"
import usuariosRouter from "./usuarios.routes.js"

const router = Router()
router.use(receitasRouter)
router.use(usuariosRouter) 

export default router