import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Task from "./components/Task";
import Comments from "./components/Comments";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/task" element={<Task />} />
          <Route path="/comments/:category/:id" element={<Comments />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
