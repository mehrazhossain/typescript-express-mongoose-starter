import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

// Using cors
app.use(cors());

// Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req: Request, res: Response) {
  /* inserting a test data into mongodb steps:
  1. Interface
  2. Schema
  3. Model (using Schema)
  4. Database Query on Model
  */

  //   interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

  //   creating userSchema by using interface
  const userSchema = new Schema<IUser>({
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    email: {
      type: String,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
  });

  //   Create model using Interface, Schema
  const User = model<IUser>("User", userSchema);

  //   Database query on Model
  const createUserToDB = async () => {
    const user = new User({
      id: 5360,
      role: "student",
      password: 1234,
      name: {
        firstName: "Mehraz",
        lastName: "Hossain",
      },
      gender: "male",
      email: "mehrazhossain54@gmail.com",
      contactNo: "01706536039",
      emergencyContactNo: "01576163212",
      presentAddress: "Panthapath",
      permanentAddress: "Noakhali",
    });
    await user.save();
    console.log(user);
  };
  createUserToDB();

  //   res.send("Hello World");
});

export default app;
