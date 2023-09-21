import express from "express";
import {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
} from "../controllers/category.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
//POST
router.post('/', createCategory)
//UPDATE
router.put("/:id", updateCategory);
//DELETE
router.delete("/:id", deleteCategory);
//GET
router.get("/:id", getCategory);

export default router;