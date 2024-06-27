import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";

export const isPatientAuthenticated = catchAsyncErrors(
  async (req, res, next) => {
    //<<<<<<<<<<<<<<<<<------------------ Authentication---------------->>>>>>>>>>>>>>>>>>>>>>>>>
    const token = req.cookies.patientToken;
    if (!token) {
      return next(new ErrorHandler("user not Authenticated", 400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);

    //   <<<<<<<<<<<<<<<<<<-----------------Authorization------------------>>>>>>>>>>>>>>>>>>>>>>>.
    if (req.user.role !== "Patient") {
      return next(
        new ErrorHandler(
          `${req.user.role} not authorized for this resource!`,
          403
        )
      );
    }
    next();
  }
);

export const isAdminAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.adminToken; // Use AdminToken instead of adminToken
  // console.log("Token from cookies:", token);

  if (!token) {
    // console.log("No token found");
    return next(new ErrorHandler("Admin not Authenticated", 400));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log("Decoded token:", decoded);
    req.user = await User.findById(decoded.id);
    console.log("User found:", req.user);

    if (req.user.role !== "Admin") {
      // console.log("User role is not Admin");
      return next(
        new ErrorHandler(
          `${req.user.role} not authorized for this resource!`,
          403
        )
      );
    }

    next();
  } catch (error) {
    // console.log("Token verification failed", error);
    return next(new ErrorHandler("Token verification failed", 400));
  }
});
