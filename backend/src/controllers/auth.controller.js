import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email }).select("+password");

 if (!admin) {
  return res.status(401).json({ message: "Invalid email or password" });
}

const isMatch = await bcrypt.compare(password, admin.password);

if (!isMatch) {
  return res.status(401).json({ message: "Invalid email or password" });
}

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (error) {
console.error(error);
res.status(500).json({ message: "Login failed" });  }
};