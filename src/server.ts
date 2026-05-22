import app from "./app"
import config from "./config/config"
import { testDatabaseConnection } from "./db/database"

const main = async () => {
  await testDatabaseConnection()
  
  app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
 })
}

main()