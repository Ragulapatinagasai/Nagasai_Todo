import "./App.css";
import Home from "./Home";
import axios from "axios";

axios.defaults.baseURL = "https://nagasai-todo-backend.onrender.com";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
