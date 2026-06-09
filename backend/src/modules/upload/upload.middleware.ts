import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "uploads";

    if (file.fieldname === "avatar") {
      folder = "uploads/avatars";
    }

    if (file.fieldname === "thumbnail") {
      folder = "uploads/canvas";
    }

    fs.mkdirSync(folder, {
      recursive: true,
    });

    cb(null, folder);
  },

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);

    cb(null, `${Date.now()}-${Math.random().toString(36).substring(2)}${ext}`);
  },
});

export const upload = multer({
  storage,

  limits: {
    fileSize: 10 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    const allowed = ["image/png", "image/jpeg", "image/webp"];

    if (allowed.includes(file.mimetype)) {
      return cb(null, true);
    }

    cb(new Error("Invalid file type"));
  },
});
