import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Message } from "../models/messageSchema.js";


export const sendMessage = catchAsyncErrors(async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Please fill form!", 400));
  }

  try {
    await Message.create({ firstName, lastName, email, phone, message });
    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to send message",
      error: error.message,
    });
  }
});

export const getAllMessages = catchAsyncErrors(async(req,res, next) => {
  const messages = await Message.find();
  if(!messages){
    return next (new ErrorHandler("messages not found", 400));
  }

  return res.status(200).json({
    success: true,
    message: "all the messages",
    messagesLength: messages.length,
    messages: messages 
  })
})