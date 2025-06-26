import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("my name is ruhit");
});

export const doctorRouter = router;
