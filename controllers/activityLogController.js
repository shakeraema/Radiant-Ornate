import ActivityLog from "../models/activityLogModel";

export const logActivity = async (userId, activityType, description) => {
  try {
    const newActivity = new ActivityLog({
      user_id: userId,
      timestamp: new Date(),
      activity_type: activityType,
      description,
    });
    await newActivity.save();
  } catch (error) {
    console.error("Error logging activity:", error);
  }
};
