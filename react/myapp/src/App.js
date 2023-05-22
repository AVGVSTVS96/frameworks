// Import hooks to manage state and reference elements from DOM
import { useEffect, useRef, useState } from 'react';
import './App.css';  // import css file

// Declare a react function component
  // A react component is a reusable piece of code that returns JSX to
  // be rendered to the page
function App() {

  // useState hook 
  const [todos, setTodos] = useState([]);

  // Using useRef hook to get values from DOM elements
  const todoText = useRef();

  // Side Effects / Lifecycle
  useEffect(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  }, []);

  // Events
  function addTodo(event) {
    event.preventDefault();
    const next = [...todos, todoText.current.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
    todoText.current.value = '';
  }

  return (
    <div>
      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}  
      </ul>

      <form onSubmit={addTodo}>
        <input type="text" placeholder="What needs to be done?" ref={todoText} />
        <input type="submit" value="Add Todo" />
      </form>

    </div>
  );
}

export default App;