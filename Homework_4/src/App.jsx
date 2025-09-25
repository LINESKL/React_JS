import './App.css'
import Todo from "./components/TodoList"
function App() {

  return (
    <>
      <div className="flex items-center flex-col">
        <h1 className="mt-10 text-green-500 text-3xl font-bold">Homework 4</h1>
        <Todo />
      </div>
    </>
  )
}

export default App
