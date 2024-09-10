import React, { useState, useEffect } from "react";
import "./assets/Home.css";
import List from "./components/List";
import Button from "@mui/material/Button";
import axios from "axios";
import InputForm from "./components/InputForm";

function Home() {
  const [ToDodata, setToDoData] = useState([]);
  const [InprogressData, setInprogressData] = useState([]);
  const [CompletedData, setCompletedData] = useState([]);
  const [popstate, setpopstate] = useState(false);

  const fetchToDo = async () => {
    try {
      const response = await axios.get("http://localhost:8800/getToDoTask");
      setToDoData(response.data);
    } catch (error) {
      console.error("There was an error fetching the ToDo data!", error);
    }
  };

  const fetchInprogress = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8800/getInProgressTask"
      );
      setInprogressData(response.data);
    } catch (error) {
      console.error("There was an error fetching the in progress data!", error);
    }
  };

  const fetchCompleted = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8800/getCompletedTask"
      );
      setCompletedData(response.data);
    } catch (error) {
      console.error("There was an error fetching the completed data!", error);
    }
  };

  useEffect(() => {
    fetchToDo();
    fetchInprogress();
    fetchCompleted();
  }, []);

  const refresh2 = () => {
    fetchToDo();
    fetchInprogress();
    fetchCompleted();
  };

  const onbthclk = () => {
    setpopstate(true);
  };

  const handleCloseForm = () => {
    setpopstate(false);
  };

  return (
    <div className="home">
      <div className="addtask">
        <h1>Desktop & Mobile Application</h1>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#8A30E5",
            fontFamily: "Inter, sans-serif ",
            textTransform: "none",
          }}
          onClick={onbthclk}
        >
          Create Task
        </Button>
      </div>
      {popstate ? (
        <InputForm handleCloseForm={handleCloseForm} refresh2={refresh2} />
      ) : (
        <hr />
      )}
      <div className="viewtask">
        <List title="TO DO" color="#8A30E5" textcolor="white" data={ToDodata} />
        <List
          title="IN PROGRESS"
          color="#FFC04E"
          textcolor="black"
          data={InprogressData}
        />
        <List
          title="COMPLETED"
          color="#06C270"
          textcolor="white"
          data={CompletedData}
        />
      </div>
    </div>
  );
}

export default Home;
