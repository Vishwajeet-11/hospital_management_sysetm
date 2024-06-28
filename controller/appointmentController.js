import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Appointment } from "../models/appointmentSchema.js";
import { User } from "../models/userSchema.js";

export const postAppointment = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    dob,
    aadhaar_number,
    gender,
    appointment_date,
    department,
    doctor_firstName,
    doctor_lastName,
    hasVisited,
    address,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !aadhaar_number ||
    !dob ||
    !gender ||
    !appointment_date ||
    !department ||
    !doctor_firstName ||
    !doctor_lastName ||
    !address
  ) {
    // console.log("entry missing")
    return next(new ErrorHandler("Please fill full from", 400));
  }
  const isConflict = await User.find({
    firstName: doctor_firstName,
    lastName: doctor_lastName,
    role: "Doctor",
    doctorDepartment: department,
  });
  if (isConflict.length > 1) {
    return next(
      new ErrorHandler(
        "Multiple doctor in the same field, request directly",
        400
      )
    );
  }
  if (isConflict.length === 0) {
    return next(new ErrorHandler("No Doctor Found!", 400));
  }

  const doctorId = isConflict[0]._id;
  const patientId = req.user._id;
  console.log(doctorId)
  console.log(patientId)
  const appointment = await Appointment.create({
    firstName,
    lastName,
    email,
    phone,
    aadhaar_number,
    dob,
    gender,
    appointment_date,
    department,
    doctor: {
      firstName: doctor_firstName,
      lastName: doctor_lastName,
    },
    hasVisited,
    address,
    doctorId,
    patientId
  });

  res.status(200).json({
    success: true,
    message: "appointment created",
    appointment: appointment,
  });
});

export const getAllAppointments = catchAsyncErrors(async (req, res, next) => {
  const appointments = await Appointment.find();

  return res.status(200).json({
    success: true,
    appointments: appointments
  })
})

export const updateAppointmentStatus = catchAsyncErrors( async (req, res, next) => {
  const id = req.params;
  let appointment = await Appointment.findById(id);
  if(!appointment) {
    return next (new ErrorHandler("appointment not found", 400));
  }
  appointment = await Appointment.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false
  })
  return res.status(200).json({
    success: true,
    message: "appointment status updated",
    appointment,
  })
})

export const deleteAppointment = catchAsyncErrors( async (req, res, next) => {
  const id = req.params;
  let appointment = await Appointment.findById(id);
  console.log(appointment)
  if(!appointment) {
    return next (new ErrorHandler("appointment not found", 400));
  }

  appointment = await Appointment.deleteOne();
  return res.status({
    success: true,
    message: "Appointment deleted",
    appointment
  })
})