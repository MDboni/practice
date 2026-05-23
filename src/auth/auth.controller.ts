import type { Request, Response } from "express"
import { AuthService } from "./auth.service"

const loginController = async (req: Request, res: Response) => {
    try{
       
        const result = await AuthService.authLoginService(req.body)

        res.status(200).json({
            success: true,
            message: 'Login successful',
            data: result
        })
    }catch(error : any) {
        const message = error instanceof Error ? error.message : 'Error occurred while logging in'
        const status = message === 'User not found' || message === 'Invalid password' ? 401 : 500

        res.status(status).json({
            success: false,
            message,
        })
    }
}


export const AuthControllers = {
    loginController
}