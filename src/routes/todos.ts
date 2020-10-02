import { Router } from "express"
import { getTodos, deleteTodo } from "../controllers/todos"

const router: Router = Router()

router.get("/todos", getTodos)

router.delete("/delete-todo/:id", deleteTodo)

export default router