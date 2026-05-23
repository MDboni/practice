import type { Request, Response } from "express"
import { TestTableService } from "./tset.service"


const createTestTableController = async (req: Request, res: Response) => {
    try{
        const result  = await TestTableService.testCreateService(req.body)
        res.status(201).json({
           success: true,
           message: 'Data inserted successfully',
           data: result.rows[0]
        })
    }catch(error : any) {
        res.status(500).json({
            success: false,
            message: 'Error occurred while inserting data',
            error
        })
    }
}


const allTestTableController = async (req: Request, res: Response) => {
    try{
        console.log("allTestTableController", req.user)
        const result = await TestTableService.alldataService()
        res.status(200).json({
            success: true,
            message: 'Data retrieved successfully',
            data: result.rows
        })
    }catch(error : any) {
        res.status(500).json({
            success: false,
            message: 'Error occurred while retrieving data',
            error
        })
    }
}
const singleTestTableController = async (req: Request, res: Response) => {
    const { id } = req.params
    try{
        const result = await TestTableService.singledataService(id as string)
        res.status(200).json({
            success: true,
            message: 'Data retrieved successfully',
            data: result.rows[0]
        })
    }catch(error : any) {
        res.status(500).json({
            success: false,
            message: 'Error occurred while retrieving data',
            error
        })
    }
}
const UpdateTestTableController = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, email, password } = req.body
    try{
        const result = await TestTableService.updatedataService(id as string, { name, email, password })
        res.status(200).json({
            success: true,
            message: 'Data updated successfully',
            data: result.rows[0]
        })
    }catch(error : any) {
        res.status(500).json({
            success: false,
            message: 'Error occurred while updating data',
            error
        })
    }
}
const DeleteTestTableController = async (req: Request, res: Response) => {

    const { id } = req.params
    try{
        const result = await TestTableService.deletedataService(id as string)
        res.status(200).json({
            success: true,
            message: 'Data deleted successfully',
            data: result.rows[0]
        })
    }catch(error : any) {
        res.status(500).json({
            success: false,
            message: 'Error occurred while deleting data',
            error
        })
    }
}

export const TestTableController = {
    createTestTableController,
    allTestTableController,
    singleTestTableController,
    UpdateTestTableController,
    DeleteTestTableController
}