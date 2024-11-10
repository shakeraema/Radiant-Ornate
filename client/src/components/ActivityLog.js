import React, { useEffect, useState } from "react";
import axios from "axios";

const ActivityLog = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get("/api/v1/activity-log");
        setActivities(response.data.activities);
      } catch (error) {
        console.error("Error fetching activity log:", error);
      }
    };
    fetchActivities();
  }, []);

  return (
    <div>
      <h3>Activity Log</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity._id}>
            <strong>{activity.activity_type}</strong> - {activity.description}{" "}
            <br />
            <small>{new Date(activity.timestamp).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
