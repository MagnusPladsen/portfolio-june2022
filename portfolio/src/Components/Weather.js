import React from 'react';
import { getWeather, getTemp, fetchWeather, selectTemp, selectWeather } from '../Features/weather';
import { useDispatch, useSelector } from 'react-redux';
import sunIcon from '../images/sun.svg'
import cloudsIcon from '../images/clouds.svg'
import rainIcon from '../images/rain.svg'
import snowIcon from '../images/snow.svg'





export default function Weather() {
    const dispatch = useDispatch() 
    dispatch(fetchWeather())
    const temp = useSelector(selectTemp);
    const weather = useSelector(selectWeather);
    const weatherIcon = () => {
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

    /* const selectCity = (e) => {
        const city = e.target.value;
        console.log(city) 
    } */

    return (
        <div className="weather-container">
            <img src={weatherIcon()} className="weather-icon" alt="weather-icon" />
            <p className="weather-temp">{temp}&#8451;</p>
            <p>Lillehammer, Norway</p>
        </div>
    )
}
