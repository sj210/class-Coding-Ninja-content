import express from "express";
import { addToDo } from "../controllers/todo-controller.js";

const route = express.Router();

route.post('/todos', addToDo);

export default route;