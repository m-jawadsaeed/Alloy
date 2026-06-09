import { Router } from "express";

import { upload } from "./upload.middleware";

const router = Router();

router.post("/avatar", upload.single("avatar"), (req, res) => {
  return res.json({
    success: true,

    url: `/uploads/avatars/${req.file?.filename}`,
  });
});

router.post("/canvas-thumbnail", upload.single("thumbnail"), (req, res) => {
  return res.json({
    success: true,

    url: `/uploads/canvas/${req.file?.filename}`,
  });
});

export default router;
