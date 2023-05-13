import express, { Application } from "express";
import cors from "cors";
import userRoutes from "./app/modules/user/user.route";
const app: Application = express();

// Using cors
app.use(cors());

// Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.use("/api/v1/user", userRoutes);

export default app;
