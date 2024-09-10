import React from "react";
import "./PriorityBtn.css";
function PriorityBtn({ text, color, baccolor }) {
  return (
    <div className="P_BTN" style={{ color: color, backgroundColor: baccolor }}>
      {text}
    </div>
  );
}

export default PriorityBtn;
