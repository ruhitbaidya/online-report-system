import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "./upload",
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({ storage });
