import './App.css'
import { useState, useEffect } from 'react'
import { getTodos } from './actions/getTodos'
import ToDoInput from './components/to-do-input/to-do-input.component'
import ToDoItemList from './components/to-do-item-list/to-do-item-list.component'

function App() {
  const [todos, setTodos] = useState([])

  const handleGetTodos = async () => {
    const items = await getTodos()
    setTodos(items)
  }

  useEffect(() => { handleGetTodos() }, [])

  return (
    <div>
      <ToDoInput handleGetTodos={handleGetTodos} />
      <ToDoItemList todos={todos} handleGetTodos={handleGetTodos} />
    </div>
  )
}

export default App
