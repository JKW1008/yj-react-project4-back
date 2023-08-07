import express from "express";
import { getJoonguFoods } from "../controllers/foodsController.js";

const foodsRouter = express.Router();

foodsRouter.get("/joongu", getJoonguFoods);

export default foodsRouter;
