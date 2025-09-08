
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const users = [
    {
      name: 'Ivan', 
    email: 'ivan@mail.ru'
  },
    {
      name: 'Petr', 
    email: 'petr@mail.ru'
  },

    {
      name: 'Sergey', 
    email: 'sergey@mail.ru'
  }
  ]

  return (
    <>
    <h1 className="text-xl text-bold">Homework - 2</h1>
    <div className='grid grid-cols-3'>
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
      </div>
    </>

  )
}
export default App

