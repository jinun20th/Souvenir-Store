import express from "express";
import {
    updateUser,
    resetPassword,
    deleteUser,
    getUser,
    getUsers
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//UPDATE
router.put("/:id", updateUser);
//RESET
router.post("/reset/:id", resetPassword);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id", getUser);
//GET ALL
router.get("/", getUsers);

export default router;