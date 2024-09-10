const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    priority: {
      type: String,
      required: true,
      enum: ["High", "Low", "Medium"],
    },
    headding: { type: String, required: true },
    description: { type: String, required: true },
    Date: { type: Date, required: true },
    catagory: {
      type: String,
      required: true,
      enum: ["ToDo", "InProgress", "Completed"],
    },
  },
  { timestamps: true }
);

const Tasks = mongoose.model("Tasks", taskSchema);

module.exports = Tasks;
