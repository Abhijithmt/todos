import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login"
import Tasks from "./pages/tasks"
import TaskDetails from "./pages/taskdetails";



function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route  path="/"  element={<Login/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
      <Route  path={"/tasks/:id"} element={<TaskDetails/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
