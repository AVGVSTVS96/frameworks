<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";

  // todo script
  import { onMount } from "svelte";

  let todos = [];
  let todoText = "";

  onMount(() => {
    const existingTodos = localStorage.getItem("todos");
    todos = JSON.parse(existingTodos) || [];
  });

  function addTodo() {
    todos = [...todos, todoText];
    localStorage.setItem("todos", JSON.stringify(todos));
    todoText = "";
  }
</script>

<main>
  <div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} class="logo" alt="Vite Logo" />
      </a>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
    </div>
    <h1>Vite + Svelte</h1>
    <div class="card">
    <Counter />
  </div>

<!-- todo component -->
  <ul>
    {#each todos as todo}
    <li>{todo}</li>
    {/each}
  </ul>

  <form on:submit|preventDefault={addTodo}>
    <input bind:value={todoText} placeholder="What needs to be done?" />
    <input type="submit" value="Add Todo" />
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
