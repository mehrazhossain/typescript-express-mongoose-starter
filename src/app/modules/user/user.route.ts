import express from "express";
import { getUsers, createUser, getUserById } from "./user.controller";

const router = express.Router();

/* APIs */
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/create-user", createUser);

export default router;
