import express from "express";
import ActivityLog from "../models/ActivityLog";

const router = express.Router();

router.get("/:userId", async (req, res) => {
  try {
    const activities = await ActivityLog.find({
      user_id: req.params.userId,
    }).sort({ timestamp: -1 });
    res.status(200).json({ activities });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve activity logs" });
  }
});

export default router;
