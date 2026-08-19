import express from "express";
import testMail from "../controllers/otp.controller.js";

const router = express.Router();

router.get("/test-mail", testMail);

export default router;