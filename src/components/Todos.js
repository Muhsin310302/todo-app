import title from "./Title"
import Todo from "./Todo"

export default function Todos({todostart, removeTodos}) {
    return (
        <main className="main-content">
        {todostart.map((todo) =>
       ( <Todo key={todo.id} title={todo.title} content={todo.content} removeTodos={removeTodos} id={todo.id}/>
        ))}
    
  
    </main>
    )}