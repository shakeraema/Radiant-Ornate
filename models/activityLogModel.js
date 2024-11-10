import mongoose from "mongoose";

const activityLogSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  timestamp: { type: Date, required: true },
  activity_type: { type: String, required: true },
  description: { type: String, required: true },
});

const ActivityLog = mongoose.model("ActivityLog", activityLogSchema);
export default ActivityLog;
