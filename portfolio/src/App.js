import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero-image"></div>
      <header className="App-header">
        <div className="grid-container">
          <div className="grid-item">
            <h1>Magnus Pladsen</h1>
            <a href="#" className="cta cta-about">ABOUT ME</a>
          </div>
          <div className="grid-item">
            <h2>What´s on your mind?</h2>
            <input type="text" placeholder="Type something..." />
          </div>
          <div className="grid-item todo-container">
            <text className="todo-red todo-tile">Water plants</text>
            <text className="todo-blue todo-tile">Wash clothes</text>
            <text className="todo-green todo-tile">Shopping</text>
          </div>
        </div>
      </header>
      <footer>
        <text><span className="italic">“When you have a dream, you’ve got to grab it and never let go.”</span>  - Carol Burnett</text>
      </footer>
    </div>
  );
}

export default App;
