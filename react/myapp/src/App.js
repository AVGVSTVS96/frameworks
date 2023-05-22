// Import hooks to manage state and reference elements from DOM
import { useEffect, useRef, useState } from 'react';
import './App.css';  // import css file

// Declare a react function component
//   A react component is a reusable piece of code that returns JSX to
//   be rendered to the page
function App() {

  // useState hook, a function that declares a state variable 
  //  - It takes the initial state as an argument which sets the state of the todo list
  //  - The initial state is an empty array so todos will start as an empty list
    
    // useState returns todos and setTodos
    //  todos value of todo list as reactive state variable, always updated
    //  setTodos is a function that can be used to update the state
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

  // JSX returns the HTML to be rendered to the page
  //   <ul> loops over todos in array => displays each todo as a <li> item
  //   <form> calls addTodo function when form is submitted
  //     - ref={todoText} gets the value of the input field
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