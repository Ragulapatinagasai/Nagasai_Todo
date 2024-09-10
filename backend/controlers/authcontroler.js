const Tasks = require("../models/TaskData");
const test = (req, res) => {
  res.send("test is working");
};

const addTask = async (req, res) => {
  try {
    const { priority, headding, description, Date, catagory } = req.body;

    if (!priority || !headding || !description || !Date || !catagory) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    const newTask = await Tasks.create({
      priority,
      headding,
      description,
      Date,
      catagory,
    });

    return res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "An error occurred while creating the Task record",
    });
  }
};

const getTask = async (req, res) => {
  try {
    const GetTasks = await Tasks.find();

    return res.status(200).json(GetTasks);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "An error occurred while retrieving Tasks records",
    });
  }
};
const getToDoTask = async (req, res) => {
  try {
    const GetTasks = await Tasks.find({ catagory: "ToDo" });

    return res.status(200).json(GetTasks);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "An error occurred while retrieving Tasks records",
    });
  }
};
const getInProgressTask = async (req, res) => {
  try {
    const GetTasks = await Tasks.find({ catagory: "InProgress" });

    return res.status(200).json(GetTasks);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "An error occurred while retrieving Tasks records",
    });
  }
};
const getCompletedTask = async (req, res) => {
  try {
    const GetTasks = await Tasks.find({ catagory: "Completed" });

    return res.status(200).json(GetTasks);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "An error occurred while retrieving Tasks records",
    });
  }
};

module.exports = {
  test,
  addTask,
  getTask,
  getToDoTask,
  getInProgressTask,
  getCompletedTask,
};
