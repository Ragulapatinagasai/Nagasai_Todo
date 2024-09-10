import React, { useState } from "react";
import axios from "axios";
import "./InputForm.css";

function InputForm({ handleCloseForm, refresh2 }) {
  const [formData, setFormData] = useState({
    priority: "",
    heading: "",
    description: "",
    date: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.priority ||
      !formData.heading ||
      !formData.description ||
      !formData.date ||
      !formData.category
    ) {
      alert("Please fill out all fields.");
      return;
    }

    const formattedData = {
      priority: formData.priority,
      headding: formData.heading,
      description: formData.description,
      Date: formData.date,
      catagory: formData.category,
    };

    try {
      const response = await axios.post(
        "http://localhost:8800/addTask",
        formattedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Task added successfully:", response.data);
      setFormData({
        priority: "",
        heading: "",
        description: "",
        date: "",
        category: "",
      });
      refresh2();
      handleCloseForm();
    } catch (error) {
      console.error(
        "There was an error adding the task:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="InputForm">
      <div className="mainform">
        <div className="mainform_head">
          <h2>Create New Task</h2>
          <button onClick={handleCloseForm}>X</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Priority:</p>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              required
            >
              <option value="">Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div>
            <p>Heading:</p>
            <input
              type="text"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <p>Description:</p>
            {/* <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            /> */}
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="10"
              cols="50"
            />
          </div>
          <div>
            <p>Date:</p>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <p>Category:</p>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="ToDo">ToDo</option>
              <option value="InProgress">InProgress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="btndiv">
            <button onClick={handleCloseForm}>cancel</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
