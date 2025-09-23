import './App.css'
import Todo from "./components/TodoList"
function App() {

  return (
    <>

     <div className="flex items-center flex-col">
          <h1 className="text-3xl font-bold mt-6">Homework 4</h1>
        
          <Todo />
        </div>
    </>
  )
}

export default App
