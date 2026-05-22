import { Pool } from "pg"
import config from "../config/config"

export const pool = new Pool({
  connectionString: config.databaseUrl,
  ssl: {
    rejectUnauthorized: false
  }
})

export const testDatabaseConnection = async () => {
    try{
        await pool.query(`
            CREATE TABLE IF NOT EXISTS test_table (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL ,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
            `)
        console.log('Database connection successful and test_table is ready.')
    }catch (error) {
        console.error('Database connection error:', error)
    }
}

