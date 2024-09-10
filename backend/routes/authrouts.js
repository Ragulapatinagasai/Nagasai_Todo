const express = require("express");

const router = express.Router();
const cors = require("cors");
const {
  test,
  addTask,
  getTask,
  getToDoTask,
  getInProgressTask,
  getCompletedTask,
} = require("../controlers/authcontroler");

router.use(
  cors({
    credentials: true,
    origin: "https://nagasai-todo.onrender.com",
  })
);

router.get("/", test);
router.get("/getTasks", getTask);
router.get("/getToDoTask", getToDoTask);
router.get("/getInProgressTask", getInProgressTask);
router.get("/getCompletedTask", getCompletedTask);
router.post("/addTask", addTask);

module.exports = router;
