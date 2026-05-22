import { Router } from "express";
import { TestTableController } from "./test.controler";

const routes = Router()

routes.get("/", TestTableController.allTestTableController)
routes.get("/:id", TestTableController.singleTestTableController)
routes.post("/", TestTableController.createTestTableController)
routes.put("/:id", TestTableController.UpdateTestTableController)
routes.delete("/:id", TestTableController.DeleteTestTableController)

export const TestTableRoutes = routes