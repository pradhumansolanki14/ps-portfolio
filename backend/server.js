// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import app from "./src/app.js";

// dotenv.config();

// const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected");

//     app.listen(PORT, () => {
//       console.log(`Server running on port http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => console.log(err)); 



import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log("MongoDB connected");
    }

    app.listen(PORT, () => {
console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });