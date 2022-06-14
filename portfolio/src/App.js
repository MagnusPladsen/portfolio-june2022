import React from 'react';
import './App.css';
import Magnus from './Components/Magnus';
import Todo from './Components/Todo';
import TodoList from './Components/TodoList';
import InspoQuote from './Components/InspoQuote';

function App() {
  return (
    <div className="App">
      <div className="hero-image"></div>
      <header className="App-header">
        <div className="grid-container">
          <Magnus />
          <Todo />
          <TodoList />
        </div>
      </header>
      <footer>
        <InspoQuote />
      </footer>
    </div>
  );
}

export default App;
