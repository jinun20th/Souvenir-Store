import express from "express";
import {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts
} from "../controllers/product.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/* POST */
router.post('/', createProduct)
/* PUT */
router.put('/:id', updateProduct)
/* DELETE */
router.delete('/:id', deleteProduct)
/* GET */
router.get('/:id', getProduct)
/* GETALL */
router.get('/', getAllProducts)

export default router;
