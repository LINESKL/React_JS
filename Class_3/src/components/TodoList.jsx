import {useState, useEffect} from 'react';


function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({title: '', content: '', deadline: ''});

    const handleAddTask = () => {
        if (newTask.title.trim() !== '' && newTask.content.trim() !== '' && newTask.deadline.trim() !== '') {
            const task = { title: newTask.title, content: newTask.content, deadline: newTask.deadline };
            setTasks([...tasks, task]);
            setNewTask({title: '', content: '', deadline: ''});
        }
    };

    useEffect(() => {
        if (tasks.length > 9) {
            alert(`У вас более 10 задач для выполнения`);
        }
    }, [tasks]);

    return (
        <>
        <div className="mt-10 w-2/5">
        <div className="mb-10">
            <label for="message" className="block mb-2 text-xl font-medium text-gray-900">New ToDo</label>
            <input type="text" value={newTask.title} onChange={(e) => setNewTask({...newTask, title: e.target.value})} className=" mb-2 block p-2.5 w-full text-sm text-gray-900 bg-green-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Title" />
            <textarea id="message" rows="4" value={newTask.content} onChange={(e) => setNewTask({...newTask, content: e.target.value})} className=" mb-2 block p-2.5 w-full text-sm text-gray-900 bg-green-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your content here..."></textarea>
            <input type="date" value={newTask.deadline} onChange={(e) => setNewTask({...newTask, deadline: e.target.value})} className=" mb-2 block p-2.5 w-full text-sm text-gray-900 bg-green-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Deadline" />
            <button onClick={handleAddTask} className="text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add Task</button>
        </div>
        <p className="mb-4">Количество задач: {tasks.length}</p>
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
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                    <tr class="border-b border-green-200" key={index}>
                        <th scope="row" class="px-6 py-4 font-medium text-green-900 whitespace-nowrap bg-gray-50 ">
                            {task.title}
                        </th>
                        <td class="px-6 py-4">
                            {task.content}
                        </td>
                        <td class="px-6 py-4 bg-green-50">
                            {task.deadline}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

        </div>
        </>
    )
}

export default TodoList;

