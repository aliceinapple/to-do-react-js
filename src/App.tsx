import './App.css'
import {useState} from 'react'
import { getItems } from './actions/get'
import ToDoInput from './components/to-do-input/to-do-input.component'
import ToDoItemList from './components/to-do-item-list/to-do-item-list.component'

function App() {
  const [todos, setTodos] = useState([])

  const handleAddToDo = async () => {
      const items = await getItems()
      setTodos(items)
  }

  return (
    <div>
      <ToDoInput handleAddToDo={handleAddToDo}/>
      <ToDoItemList todos={todos}/>
      </div>
  )
}

export default App
