import cors from "cors";
import express from "express";
import otpRoute from "./routes/otp.route.js";

const app = express();

app.use(cors());
app.use(express.json()); // lets Express read JSON from req.body

// app.use('/api/auth', authRoutes); // all auth routes now live under /api/auth
// app.use('/api', productRoutes); // all auth routes now live under /api
app.use("/api", otpRoute);

export default app;