import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "first name must contain atleast three characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must contain atleast 3 characters"],
  },

  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "please provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must be 10 digits long"],
    maxLength: [10, "Phone number must be 10 digits long"],
  },
  aadhaar_number: {
    type: String,
    required: true,
    minLength: [12, "aadhaar must contain 12 digits"],
    maxLength: [12, "aadhaar must contain 12 digits"],
  },
  dob: {
    type: Date,
    required: [true, "DOB required"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },
  appointment_date: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  doctor: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  hasVisited : {
    type: Boolean,
    default : false
  },
  doctorId : {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  patientId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status : {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});


export const Appointment = mongoose.model("Appointment", appointmentSchema);