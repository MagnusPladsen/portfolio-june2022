import React, { useEffect, useState } from 'react';
import { fetchWeather, selectTemp, selectWeather} from '../Features/weather';
import { useDispatch, useSelector } from 'react-redux';
import sunIcon from '../images/sun.svg'
import cloudsIcon from '../images/clouds.svg'
import rainIcon from '../images/rain.svg'
import snowIcon from '../images/snow.svg'


const defaultCity = 'Lillehammer';

export default function Weather() {
    const dispatch = useDispatch() 
    const [city, setCity] = useState(defaultCity);
    const temp = useSelector(selectTemp); //Selects the temperature from the store
    const weather = useSelector(selectWeather); //Selects the weather from the store

    useEffect(() => {
        dispatch(fetchWeather(city)) //Fetches the weather data from the API
    })

    const cityUpperCase = city.toUpperCase();

    const handleSearch = (e) => {
        let input = e.target.value;
        if (e.key === 'Enter') {
            console.log('DISPATCHING');
            setCity(input);
            dispatch(fetchWeather(city))
        }
    }

     
    const weatherIcon = () => { //Returns the correct icon for the weather condition from API
        if (weather === 'Clear') {
            return sunIcon
        } else if (weather === 'Clouds') {
            return cloudsIcon
        } else if (weather === 'Rain') {
            return rainIcon
        } else if (weather === 'Snow') {
            return snowIcon
        }
    }

    return (
        <div className="weather-container">
            <img src={weatherIcon()} className="weather-icon" alt="weather-icon" />
            <p className="weather-temp">{temp}&#8451;</p>
            <p>{cityUpperCase}</p>
            <input type="text" id="city" placeholder="Enter a city..." onKeyDown={handleSearch} />
        </div>
    )
}
