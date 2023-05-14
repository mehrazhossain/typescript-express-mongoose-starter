import express from "express";
import {
  getUsers,
  createUser,
  getUserById,
  getAdminUsers,
} from "./user.controller";

const router = express.Router();

/* APIs */
router.get("/", getUsers);
router.get("/admins", getAdminUsers);
router.get("/:id", getUserById);
router.post("/create-user", createUser);

export default router;
