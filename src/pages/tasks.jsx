import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.slice(0, 20)); // show 20 items
      });
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>
              {task.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;