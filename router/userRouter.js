import express from "express";
import { addNewAdmin, getAdminDetails, getAllDoctors, getAllPatients, login, logoutAdmin, logoutPatient, patientRegister } from "../controller/userController.js";
import { isAdminAuthenticated, isPatientAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login)
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin)
router.get("/doctors", getAllDoctors)
router.get("/admin/me", isAdminAuthenticated, getAdminDetails);
router.get("/patient/me", isPatientAuthenticated, getAllPatients);
router.get("/admin/logout",isAdminAuthenticated, logoutAdmin);
router.get("/patient/logout",isPatientAuthenticated, logoutPatient);

export default router;