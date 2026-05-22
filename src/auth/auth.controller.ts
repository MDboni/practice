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
        res.status(500).json({
            success: false,
            message: 'Error occurred while logging in',
            error
        })
    }
}


export const AuthControllers = {
    loginController
}