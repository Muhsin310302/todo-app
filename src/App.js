import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos'
import Form from './components/Form';
import { useState } from 'react';

const todostart = [
  {
    id:0,
    title: "lage middag",
    content: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
  }
  

  
]

function App() {
  const[todo, setTodo] = useState({title: "", content: ""})
  const [todos, setTodos] = useState([...todostart])
  const [id, setId] = useState(1)

  const addTodo = (event) =>{
    const inputName = event.target.name
    const inputValue = event.target.value
    setTodo((prev) => ({...prev, [inputName]: inputValue}))
  }

  const handleClick = () => {
    setId((prev) => prev + 1)
    setTodos((prev) =>[
      {id, title: todo.title, content: todo.content}, ...prev
    ])

  }

  const removeTodos = (todoid) =>{
    setTodos(todos.filter((item) => item.id !== todoid))
   
  }

  

  return (
    <>
    <Navbar username="Muhsin"/>
    <section className='container'>
    <Form handleClick={handleClick} addTodo={addTodo} todo={todo} />
    </section>
    
    
    <Todos todostart={todos} removeTodos={removeTodos}/>
    </>
  );
}

export default App;
