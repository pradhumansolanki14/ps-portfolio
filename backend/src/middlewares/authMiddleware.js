import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  try {
    let token;

    // 🔥 GET TOKEN
    if (req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // 🔥 VERIFY TOKEN (checks expiry automatically)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.admin = decoded.id;

    next();

  } catch (error) {
    // 🔥 BETTER ERROR HANDLING
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }

    return res.status(401).json({ message: "Invalid token" });
  }
};

export default protect;