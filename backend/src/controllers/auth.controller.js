import user from "../models/auth.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userLogin = async (req, res) => {
  try {
    let { username, email, password, isVerified } = req.body;

    if (!username || !email || !password || !isVerified) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const userExists = await userModel.findOne({
      $or: [{ email }, { username }],
    });
    if (userExists) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const token = jwt.sign(
    {
      username: username,
      email: email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "5h",
    },
  );
    return res.status(201).json({
      message: "User registered successfully",
      user: { id: newUser._id, name: newUser.username, email: newUser.email },
      token : token
    });
  } catch (error) {
    console.log(error);
  }
  
};
export async function tokens(req, res) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token missing" });
  }

  const token = authHeader.split(" ")[1];
  let payload;
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return res.status(401).json({
      message: "Token expired",
    });
  }

  return res.status(200).json({
    message: "Profile fetched successfully",
    username: payload.username,
    email: payload.email,
  });
}
export default testMail;
