import type { Test } from "./test.interface"
import { pool } from "../db/database"
import type { Response } from "express"
import bcrypt from "bcrypt";


const testCreateService = async (payload: Test) => {
    const { name, email, password } = payload
    const hashedPassword = await bcrypt.hash(password, 10)

    const testQuery =await  pool.query(`
        INSERT INTO test_table (name, email, password)
        VALUES ($1, $2, $3)
        RETURNING *
    `, [name, email, hashedPassword])
    delete testQuery.rows[0].password
    return testQuery
}
const alldataService = async () => {
    const testQuery = await pool.query(`
        SELECT * FROM test_table
    `)
    return testQuery
}

const singledataService = async (id: string) => {
    const testQuery = await pool.query(`
        SELECT * FROM test_table WHERE id = $1
    `, [id])
    return testQuery
}
const updatedataService = async (id: string, payload: Partial<Test>) => {
    const { name, email, password } = payload
    const testQuery = await pool.query(`
        UPDATE test_table
        SET name = $1, email = $2, password = $3
        WHERE id = $4
        RETURNING *
    `, [name, email, password, id])
    return testQuery
}
const deletedataService = async (id: string) => {
    const testQuery = await pool.query(`
        DELETE FROM test_table WHERE id = $1
        RETURNING *
    `, [id])
    return testQuery
}

export const TestTableService = {
    testCreateService,
    alldataService, 
    singledataService,
    updatedataService,
    deletedataService
}