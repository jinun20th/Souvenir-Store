import express from "express";
import {
    createCart,
    updateCart,
    deleteCart,
    getCart,
} from "../controllers/cart.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
//POST
router.post('/', createCart)
//UPDATE
router.put("/:id", updateCart);
//DELETE
router.delete("/:id", deleteCart);
//GET
router.get("/:id", getCart);

export default router;