// Import hooks to manage state and reference elements from DOM
import { useEffect, useRef, useState } from 'react';
import './App.css';  // import css file

// Declare a react function component
  // A react component is a reusable piece of code that returns JSX to
  // be rendered to the page
function App() {

  // useState hook 
  //  - useState is a function that takes the initial state as an argument
  //  - The initial state is an empty array so todos will start as an empty list
    
    // useState returns an array with two elements
    //  - todos is the current state of the element
    //  - setTodos is a function that can be used to update the state of todos  
  const [todos, setTodos] = useState([]);

  // useRef hook to get/reference values from DOM elements
  //  - returns the value of the input field
  const todoText = useRef();

  // Side Effects / Lifecycle
  // useEffect is a hook to run side effects like fetching data and updating the DOM
  // useEffect hook is used to read todos from local storage
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