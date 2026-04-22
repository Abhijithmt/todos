import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, [id]);

  if (!task) return <p>Loading...</p>;

  return (
    <div>
      <h2>Task Details</h2>
      <p><b>ID:</b> {task.id}</p>
      <p><b>Title:</b> {task.title}</p>
      <p><b>Status:</b> {task.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

export default TaskDetails;