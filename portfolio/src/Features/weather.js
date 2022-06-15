import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiCall } from "../Api/weatherApi"



export const fetchWeather = createAsyncThunk('weather/getWeather', async () => {
    const response = await fetch(apiCall)
    const data = await response.json()
    return data
}
)


export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        temp: NaN,
        weather: '',
        isLoading: false,
        hasError: false
    },
    reducers: {
        getWeather: (state, action) => {
            return state.weather
        },
        getTemp: (state, action) => {
            return state.temp
        }
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
            state.isLoading = false;
            state.hasError = true;
        }
    }
}) 

export const selectWeather = state => state.weather.weather;
export const selectTemp = state => state.weather.temp;
export default weatherSlice.reducer
export const { getWeather } = weatherSlice.actions