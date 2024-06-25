import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "first name must contain atleast three characters"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain atleast 3 characters"]
    },

    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "please provide a valid email"]
    },
    phone : {
        type: String,
        required: true,
        minLength: [10, "Phone number must be 10 digits long"],
        maxLength: [10, "Phone number must be 10 digits long"]
    },
    message: {
        type: String,
        required: true,
        minLength: [10, "message must contain atleast 10 character"]
    }

})

export const Message = mongoose.model("Message", messageSchema);