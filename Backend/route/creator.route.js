import express from "express";
import { getcreator } from "../controller/creator.controller.js";

const router = express.Router();

router.get("/", getcreator);

export default router;