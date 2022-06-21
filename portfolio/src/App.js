import React from 'react';
import './App.css';
import Magnus from './Components/Magnus';
import InspoQuote from './Components/InspoQuote';
import Weather from './Components/Weather';
import Skills from './Components/Skills';
import Interests from './Components/Interests';
import { useSelector } from 'react-redux';
import { selectWeather } from './Features/weather';

function App() {
  const weather = useSelector(selectWeather); //Selects the weather from the store
  const weatherBG = () => { //Returns the correct background for the weather condition from API
    if (weather === 'Clear') {
        return 'sunBG'
    } else if (weather === 'Clouds') {
        return 'cloudsBG'
    } else if (weather === 'Rain') {
        return 'rainBG'
    } else if (weather === 'Snow') {
        return 'snowBG'
    } else {
      return 'defaultBG'
    }
}
  return (
    <div className="App">
      <div className="hero-image" id={weatherBG()}></div>
      <Weather />
      <header className="App-header">
        <div className="grid-container">
          <Magnus />
          {/* <Todo /> */}
          {/* <TodoList /> */}
          <Skills />
          <Interests />
          {/* <InspoQuote /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
