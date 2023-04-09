import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import moment from 'moment';

// The OpenWeatherMap_API_TOKEN (replace with your own token)
const apiKey = process.env.REACT_APP_OWM_API_TOKEN;

export const weatherSlice = createSlice({
    name: 'weatherForecast',
    initialState: {
        forecast: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        fetchWeatherForecastRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchWeatherForecastSuccess: (state, action) => {
            state.isLoading = false;
            state.forecast = action.payload;
        },
        fetchWeatherForecastFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchWeatherForecastRequest, fetchWeatherForecastSuccess, fetchWeatherForecastFailure } = weatherSlice.actions;

export const fetchWeatherForecast = (destination) => async (dispatch) => {
    dispatch(fetchWeatherForecastRequest());
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${destination}&units=metric&appid=${apiKey}`
        );
        // const forecastData = response.data.list.slice(0, 7).map((item) => ({
        //     date: item.dt_txt,
        //     temperature: item.main.temp,
        //     icon: item.weather[0].icon,
        //     description: item.weather[0].description,
        // }));
        const forecastData = response.data.list
            .filter((reading) => {
                // Get the date and time from the reading
                const dateAndTime = reading.dt_txt.split(' ');

                // Get the date only from the date and time
                const date = dateAndTime[0];

                // Return true if the date is within the next 7 days
                return moment(date).isBetween(moment(), moment().add(6, 'days'), 'day', '[]');
            })
            .map((reading) => ({
                date: reading.dt_txt,
                temperature: Math.round(reading.main.temp),
                description: reading.weather[0].description,
                icon: reading.weather[0].icon,
            }));

        dispatch(fetchWeatherForecastSuccess(forecastData));
    } catch (error) {
        dispatch(fetchWeatherForecastFailure(error.message));
    }
};

export default weatherSlice.reducer;
