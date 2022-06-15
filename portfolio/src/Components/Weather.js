import React, { useEffect } from 'react';
import { getWeather, getTemp, fetchWeather, selectTemp, selectWeather } from '../Features/weather';
import { useDispatch, useSelector } from 'react-redux';
import sunIcon from '../images/sun.svg'
import cloudsIcon from '../images/clouds.svg'
import rainIcon from '../images/rain.svg'
import snowIcon from '../images/snow.svg'

export let cityName = 'Lillehammer'  //Default value for cityName

/* export const selectCity = (e) => { //Selects the city name from the input field
    const city = e.target.value;
    cityName = city;
    console.log(cityName)
} */


export default function Weather() {
    const dispatch = useDispatch()  
    dispatch(fetchWeather()) //Fetches the weather data from the API
    const temp = useSelector(selectTemp); //Selects the temperature from the store
    const weather = useSelector(selectWeather); //Selects the weather from the store
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
            <p>{cityName}</p> 
            {/* <input type="text" onChange={selectCity} /> */}
        </div>
    )
}
