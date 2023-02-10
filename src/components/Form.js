export default function Form({handleClick, todo, addTodo}) {
    const handleSubmit =(event) =>{
        event.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="to-do">To do</label>
            <input
            name="title"
            id="to-do"
            type="text"
            value={todo.addTodo}
            onChange={addTodo}
            />

            <label htmlFor="content">Content</label>
            <textarea
            name="content"
            id="content"
            type="text"
            value={todo.addTodo}
            onChange={addTodo}
            />

            

            <button className="todo-btn" type="submit" onClick={handleClick}>Add to do</button>
            
        </form>
    )

    
}