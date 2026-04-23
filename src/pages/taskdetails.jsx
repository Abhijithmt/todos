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
   <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md border">
    
    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
      Task Details
    </h2>

    <div className="space-y-3 text-gray-700">
      
      <div className="flex justify-between">
        <span className="font-semibold">ID</span>
        <span>{task.id}</span>
      </div>

      <div className="flex justify-between">
        <span className="font-semibold">Title</span>
        <span className="text-right max-w-[60%]">
          {task.title}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-semibold">Status</span>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            task.completed
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>

    </div>

  </div>
</div>
  );
}

export default TaskDetails;