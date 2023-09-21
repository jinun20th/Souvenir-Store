import express from "express";
import {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder,
} from "../controllers/order.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
//POST
router.post('/', createOrder)
//UPDATE
router.put("/:id", updateOrder);
//DELETE
router.delete("/:id", deleteOrder);
//GET
router.get("/:id", getOrder);

export default router;