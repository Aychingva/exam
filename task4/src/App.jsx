import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {

  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
    
    .then(response => {
     
      setTodos(response.data);



    
    })

    .catch(err=>{
      console.log("error")
    })
  ,[]})

  return (
    
    <>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <div> Title:{todo.title}</div>
            <div> completed:{todo.completed ? "true" : "false"}</div>
            <div> Id:{todo.id}</div>
            {/* <div>{userId}</div> */}
          </li>
          
          )

          )}
        
      </ul>
    </>
    
  )
    
}

export default App
