import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";

export const patientRegister = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
    dob,
    aadhaar_number,
    role,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !password ||
    !gender ||
    !dob ||
    !aadhaar_number ||
    !role
  ) {
    console.log(next(new ErrorHandler("please fill full form", 400)));
  }

  const user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already registered!!", 400));
  }
  user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
    dob,
    aadhaar_number,
    role,
  });

  return res.status(200).json({
    success: true,
    message: "user registered",
    user: user.firstName,
  });
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password, confirmPassword, role } = req.body;

  if (!email || !password || !confirmPassword || !role) {
    return next(new ErrorHandler("Please provide all details", 400));
  }

  if (password !== confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("invalid user credentials", 400));
  }

  const isPasswordMatch = await user.comparePassword(password);
  if(!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Password or Email", 400))
  }

  if(role !== user.role){
    return next(ErrorHandler("user with this role not found", 400));
  }

  return res.status(200).json({
    success: true,
    message: "user logged in successful"
  })

});
