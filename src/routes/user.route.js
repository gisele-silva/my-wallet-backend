import { Router } from "express"
import { login, cadastro } from "../controllers/user.controllers.js";

const userRouter = Router()

userRouter.post("/sign-up", cadastro)
userRouter.post("/sign-in", login)

export default userRouter