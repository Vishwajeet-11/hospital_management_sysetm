import express from "express";
import { deleteAppointment, getAllAppointments, postAppointment, updateAppointmentStatus } from "../controller/appointmentController.js";
import { isAdminAuthenticated, isPatientAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/newAppointment",isPatientAuthenticated, postAppointment);
router.get("/getAllAppointments",isAdminAuthenticated, getAllAppointments);
router.put("/updateStatus/:_id",isAdminAuthenticated, updateAppointmentStatus);
router.delete("/deleteAppointment/:_id",isAdminAuthenticated, deleteAppointment);

export default router;