import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.slice(0, 20));
      });
  }, []);

  return (
    <div className="px-5">
      <div>
      <h2 className="text-center text-3xl font font-extrabold">Tasks</h2>
      </div>
      <div className="text-center ">
      <ul className=" text-left flex flex-col gap-2">
        {tasks.map((task) => (
          <li className="hover:underline" key={task.id }>
            <span className="text-green-500">✔</span>
            <Link to={`/tasks/${task.id}`}>
              {task.title}
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Tasks;