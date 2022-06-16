import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiCall } from "../Components/Weather"



export const fetchWeather = createAsyncThunk('weather/getWeather', async (city) => {
    const apiKey = 'e830364e590c9fc8a17ba641130f732d'
    const cityName = city
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    const response = await fetch(apiCall)
    const data = await response.json()
    console.log('FETCHED')
    return data
}
)

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        temp: 0,
        weather: 'Clear',
        isLoading: false,
        hasError: false
    },
    reducers: {
        getWeather: (state, action) => {
            return state.weather
        },
        getTemp: (state, action) => {
            return state.temp
        },
    },
    extraReducers: {
        [fetchWeather.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchWeather.fulfilled]: (state, action) => {
            state.temp = Math.round(action.payload.main.temp - 273.15);
            state.weather = action.payload.weather[0].main;
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchWeather.rejected]: (state, action) => {
            state.temp = NaN;
            state.weather = 'Clear';
            state.isLoading = false;
            state.hasError = true;
        },
    }
}
)




export const selectWeather = state => state.weather.weather;
export const selectTemp = state => state.weather.temp;
export default weatherSlice.reducer
export const { getWeather } = weatherSlice.actions