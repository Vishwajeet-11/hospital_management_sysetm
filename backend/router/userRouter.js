import express from "express";
import { addNewAdmin, addNewDoctor, getAdminDetails, getAllDoctors, getAllPatients, login, logoutAdmin, logoutPatient, patientRegister } from "../controller/userController.js";
import { isAdminAuthenticated, isPatientAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

/**
 * @swagger
 * /api/v1/user/patient/register:
 *   post:
 *     summary: Register a new patient
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Patient registered successfully
 */
router.post("/patient/register", patientRegister);

/**
 * @swagger
 * /api/v1/user/login:
 *   post:
 *     summary: Log in a user
 *     tags: [User]
 *     responses:
 *       200:
 *         description: User logged in successfully
 */
router.post("/login", login)
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin)
router.get("/doctors", getAllDoctors)
router.get("/admin/me", isAdminAuthenticated, getAdminDetails);
router.get("/patient/me", isPatientAuthenticated, getAllPatients);
router.get("/admin/logout",isAdminAuthenticated, logoutAdmin);
router.get("/patient/logout",isPatientAuthenticated, logoutPatient);


router.post("/doctor/addnew",isAdminAuthenticated, addNewDoctor);



export default router;