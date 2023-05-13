import User from "./user.model";

export const createUserToDB = async () => {
  const user = new User({
    id: "14141",
    role: "student",
    password: "1234",
    name: {
      firstName: "Mahtab",
      lastName: "Ridoy",
    },
    gender: "male",
    email: "mahtab@gmail.com",
    contactNo: "0198524342",
    emergencyContactNo: "0198524342",
    presentAddress: "Badda",
    permanentAddress: "Chadpur",
  });
  await user.save();
  return user;
};
