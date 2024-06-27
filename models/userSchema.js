import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true,
    minLength: [11, "Password must contain 11 characters"],
    select: false,
  },
  role: {
    type: String,
    required: true,
    enum: ["Admin", "Patient", "Doctor"],
  },
  doctorDepartment: {
    type: String,
  },
  docAvatar: {
    public_id: String,
    url: String,
  },
});

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {expiresIn: process.env.JWT_EXPIRES})
}

export const User = mongoose.model("User", userSchema);
