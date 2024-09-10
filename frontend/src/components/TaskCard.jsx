import React, { useState } from "react";
import "./TaskCard.css";
import PriorityBtn from "./PriorityBtn";
import TodayIcon from "@mui/icons-material/Today";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function TaskCard({ pri, headdertext, desc, date }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const getPriorityProps = () => {
    switch (pri) {
      case "High":
        return { text: "High", color: "#ff5c00", baccolor: "#f9e7dc" };
      case "Low":
        return { text: "Low", color: "#828282", baccolor: "#f0ffdd" };
      default:
        return { text: "Medium", color: "#ff00b8", baccolor: "#ffece1" };
    }
  };

  return (
    <div className="taskCard">
      <div className="priority">
        <PriorityBtn {...getPriorityProps()} />
      </div>
      <div className="description">
        <h2>
          <span>{headdertext}</span>
          <span onClick={toggleDropdown} className="expand-icon">
            <ExpandMoreIcon />
          </span>
        </h2>
        <div>
          {dropdownVisible && (
            <div className="dropdown">
              <p>In Progress</p>
              <p>To Do</p>
              <p>Completed</p>
            </div>
          )}
        </div>
        <p>{desc}</p>
      </div>
      <div>
        <hr />
      </div>
      <div className="date">
        <TodayIcon />
        <span>{date}</span>
      </div>
    </div>
  );
}

export default TaskCard;
