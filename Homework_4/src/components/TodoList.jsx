import {useState, useEffect, useCallback, useRef, memo} from 'react';

const TaskRow = memo(function TaskRow({ task, toggleStatus, deleteTask }) {
  return (
    <tr className="border-b border-green-200">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-green-900 whitespace-nowrap bg-gray-50 "
      >
        {task.title}
      </th>
      <td className="px-6 py-4">{task.content}</td>
      <td className="px-6 py-4 bg-green-50">{task.deadline}</td>
      <td className="px-3 py-4">
        <input
          checked={task.status}
          onChange={() => toggleStatus(task.id)}
          type="checkbox"
          className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-green-500"
        />
      </td>
      <td className="px-6 py-4">
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:underline"
        >
          Удалить
        </button>
      </td>
    </tr>
  );
});


function TodoList() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [newTask, setNewTask] = useState({
        title: '', 
        content: '', 
        deadline: '', 
        status: false
    });

    const inputRef = useRef(null)

    const handleAddTask = useCallback(() => {
        if (!newTask.title.trim()) return;

        setTasks(prev => [
        ...prev,
        {
            id: Date.now(), 
            title: newTask.title,
            content: newTask.content,
            deadline: newTask.deadline,
            status: false
        }
        ]);

        setNewTask({ title: '', content: '', deadline: '', status: false });

        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [newTask]);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    const toggleStatus = useCallback(id => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, status: !task.status } : task
        )
        );
    }, []);

    const deleteTask = useCallback(id => {
        setTasks(prev => prev.filter(task => task.id !== id));
    }, []);

    return (
        <>
        <div className="mt-10 w-2/5">
        <div className="mb-10">
            <label for="message" className="block mb-2 text-xl font-medium text-gray-900">
                New ToDo
            </label>
            <input 
                ref={inputRef}
                type='text'
                value={newTask.title} 
                onChange={e => setNewTask({ ...newTask, title: e.target.value })}
                className=" mb-2 block p-2.5 w-full text-sm text-gray-900 bg-green-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Title" />
            <textarea 
                id="message" 
                rows="4" 
                value={newTask.content} onChange={(e) => setNewTask({...newTask, content: e.target.value})} 
                className=" mb-2 block p-2.5 w-full text-sm text-gray-900 bg-green-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Write your content here..."></textarea>
            <input 
                type="date" 
                value={newTask.deadline} onChange={(e) => setNewTask({...newTask, deadline: e.target.value})} 
                className=" mb-2 block p-2.5 w-full text-sm text-gray-900 bg-green-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Deadline" />
            <button 
                onClick={handleAddTask} 
                className="text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Add Task
            </button>
        </div>
        
        <p className="mb-4">Number of tasks: {tasks.length}</p>
        
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-green-200">
                    <tr>
                        <th scope="col" class="px-6 py-3 bg-gray-50 ">
                            Task
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Content
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-50">
                            Deadline
                        </th>
                        <th scope="col" class="px-3 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3 bg-gray-50">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                {tasks.map(task => (
                    <TaskRow
                    key={task.id}
                    task={task}
                    toggleStatus={toggleStatus}
                    deleteTask={deleteTask}
                    />
                ))}
                </tbody>
            </table>
        </div>

        </div>
        </>
    )
}

export default TodoList;

