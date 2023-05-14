import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();
  console.log(user.fullName());

  return user;
};

export const getUsersToDB = async () => {
  const users = User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = User.findOne({ id: payload }, { name: 1, contactNo: 1 });
  return user;
};
