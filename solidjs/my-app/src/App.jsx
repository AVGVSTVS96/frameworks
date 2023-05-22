import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, onMount } from 'solid-js';

function App() {
  
  const [todos, setTodos] = createSignal([]);
  let todoText;

  onMount(() => {
    const existingTodos = localStorage.getItem('todos');
    setTodos(existingTodos ? JSON.parse(existingTodos) : []);
  });

  function addTodo(event) {
    event.preventDefault();
    const next = [...todos(), todoText.value];
    setTodos(next);
    localStorage.setItem('todos', JSON.stringify(next));
    todoText.value = '';
  }

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <div>
      <ul>
        {todos().map(todo => (<li key={todo}>{todo}</li>))}  
      </ul>

      <form onSubmit={addTodo}>
        <input type="text" placeholder="What needs to be done?" ref={todoText} />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
      </header>
    </div>
  );
}

export default App;
