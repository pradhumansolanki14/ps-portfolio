// import multer from "multer";
// import path from "path";

// // storage config
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, Date.now() + ext);
//   },
// });

// const upload = multer({ storage });

// export default upload;




import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;