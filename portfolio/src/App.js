import React from 'react';
import './App.css';
import Magnus from './Components/Magnus';
import InspoQuote from './Components/InspoQuote';
import Weather from './Components/Weather';
import Skills from './Components/Skills';
import Interests from './Components/Interests';

function App() {
  return (
    <div className="App">
      <div className="hero-image"></div>
      <Weather />
      <header className="App-header">
        <div className="grid-container">
          <Magnus />
          {/* <Todo /> */}
          {/* <TodoList /> */}
          <Skills />
          <Interests />
          <InspoQuote />
        </div>
      </header>
    </div>
  );
}

export default App;
