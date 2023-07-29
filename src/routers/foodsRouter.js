import express from "express";
import { getJoongufoods } from "../controllers/foodsController.js";

const foodsRouter = express.Router();

foodsRouter.get("/joongu", getJoongufoods);

export default foodsRouter;
