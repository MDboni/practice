import { Router } from "express"
import { AuthControllers } from "./auth.controller"

const routes = Router()

// routes.post("/register", AuthController.registerController)
routes.post("/login", AuthControllers.loginController)


export const AuthRoutes = routes