import { Router } from "express";

import { upload } from "./upload.middleware";

const router = Router();

router.post("/avatar", upload.single("avatar"), (req, res) => {
  return res.json({
    success: true,

    file: req.file,
  });
});

export default router;
