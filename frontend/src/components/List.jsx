import React from "react";
import "./List.css";
import TaskCard from "./TaskCard";
function List({ title, color, textcolor, data }) {
  return (
    <div className="list">
      <div
        className="list_title"
        style={{ backgroundColor: color, color: textcolor }}
      >
        {title}
      </div>
      <div className="list_elements">
        {data.length > 0 ? (
          data.map((dat, idx) => (
            // <SalesCard key={sale.SoldbatchNumber} sale={sale} />
            <TaskCard
              pri={dat.priority}
              key={idx}
              headdertext={dat.headding}
              desc={dat.description}
              // date="08/09/2024"
              date={dat.Date}
            />
          ))
        ) : (
          <p>No Data available</p>
        )}
        {/* <TaskCard
          pri="High"
          headdertext="Brainstroming"
          desc="Brainstroming brings team members diverse experience into play."
          date="08/09/2024"
        /> */}
      </div>
    </div>
  );
}

export default List;
