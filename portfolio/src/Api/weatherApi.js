import { cityName } from "../Components/Weather"

const apiKey = 'e830364e590c9fc8a17ba641130f732d'

export const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`