import express from "express"
import { TestTableRoutes } from "./models/test.routes"
import { AuthRoutes } from "./auth/auth.routes"
const app = express()

app.use(express.json())


app.use('/api/test', TestTableRoutes)
app.use("/api/auth", AuthRoutes)

export default app