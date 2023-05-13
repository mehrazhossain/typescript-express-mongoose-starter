import { Request, Response, NextFunction } from "express";
import { createUserToDB } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await createUserToDB();

  res.status(200).json({
    status: "success",
    data: user,
  });
};
