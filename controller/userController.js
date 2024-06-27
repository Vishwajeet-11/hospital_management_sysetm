import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwtToken.js";

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

  let user = await User.findOne({ email });
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
  generateToken(user, "User Registered", 200, res);
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
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Password or Email", 400));
  }

  if (role !== user.role) {
    return next(new ErrorHandler("user with this role not found", 400));
  }

  generateToken(user, "User LoggedIn", 200, res);
});

export const addNewAdmin = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
    dob,
    aadhaar_number,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !password ||
    !gender ||
    !dob ||
    !aadhaar_number
  ) {
    console.log(next(new ErrorHandler("please fill full form", 400)));
  }

  const isRegistered = await User.findOne({ email });
  if (isRegistered) {
    return next(
      new ErrorHandler(
        `${isRegistered.role} with this email already exists`,
        400
      )
    );
  }

  const admin = await User.create({
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
    dob,
    aadhaar_number,
    role: "Admin",
  });
  res.status(200).json({
    success: true,
    message: "Doctor successfully registered!!",
    Doctor: User.firstName,
  });
});

export const getAllDoctors = catchAsyncErrors(async (req, res, next) => {
  const doctors = await User.find({ role: "Doctor" });
  return res.status(200).json({
    success: true,
    doctors,
  });
});

export const getAdminDetails = catchAsyncErrors(async (req, res, next) => {
  const userDetails = await User.find({ role: "Admin" });
  if (!userDetails) {
    return next(new ErrorHandler("unable to find all users details", 400));
  }
  return res.status(200).json({
    success: true,
    message: "All users",
    length: userDetails.length,
    User: userDetails,
  });
});

export const getAllPatients = catchAsyncErrors(async (req, res, next) => {
  const patientDetails = await User.find({ role: "Patient" });
  if (!patientDetails) {
    return next(new ErrorHandler("Patient details not found ", 400));
  }
  return res.status(200).json({
    success: true,
    message: "All Patients information:-",
    length: patientDetails.length,
    Patients: patientDetails,
  });
});

export const logoutAdmin = catchAsyncErrors(async (req, res, next) => {
  res
    .status(200)
    .cookie("adminToken", "", {
      httpOnly: true,
      expiresIn: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "User logged out!",
    });
});
export const logoutPatient = catchAsyncErrors(async (req, res, next) => {
  res
    .status(200)
    .cookie("patientToken", "", {
      httpOnly: true,
      expiresIn: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "User logged out!",
    });
});
