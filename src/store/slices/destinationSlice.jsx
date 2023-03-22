import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { showToast, hideToast } from './toastSlice';
import { logQuery } from './queryLogSlice';
import { fetchTravelTips } from './travelTipsSlice';
import { fetchTravelItinerary } from './travelItinerarySlice'

const initialState = {
  loading: false,
  destinations: [],
  error: null,
};

// Define the destination slice using createSlice
export const destinationSlice = createSlice({
  name: 'destination',
  initialState,
  reducers: {
    // Reducer function for the fetchDestinationsStart action
    fetchDestinationsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    // Reducer function for the fetchDestinationsSuccess action
    fetchDestinationsSuccess: (state, action) => {
      state.loading = false;
      state.destinations = action.payload;
    },
    // Reducer function for the fetchDestinationsFailure action
    fetchDestinationsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export the action creators
export const { fetchDestinationsStart, fetchDestinationsSuccess, fetchDestinationsFailure } = destinationSlice.actions;

// Action creator that fetches client's IP address and dispatches both submitForm and logQuery actions

// Define an async action creator to submit the form data
export const submitForm = (values) => async (dispatch) => {
  dispatch(fetchDestinationsStart()); // Dispatch the fetchDestinationsStart action

  const { destination, duration} = values;
  // Fetch the client's IP address using an external API
  const response = await axios.get('https://api.ipify.org?format=json');
  const ipAddress = response.data.ip;
  
  try {
    // Make a request to the ChatGPT server with the form data
    dispatch(fetchTravelItinerary({ destination, duration }));
    dispatch(fetchTravelTips(destination));
    
    // Dispatch logQuery action with the appropriate payload
    dispatch(logQuery({ ipAddress, destination, duration, createdBy: 'user' }));

    // Dispatch the fetchDestinationsSuccess action with the response data
    dispatch(fetchDestinationsSuccess(response.data)); 
    dispatch(showToast({ type: 'success', message: 'Destination added successfully' })); // Dispatch the showToast action with a success message
  } catch (error) {
    // Dispatch the fetchDestinationsFailure action with the error message
    dispatch(fetchDestinationsFailure(error.message)); 
    // Dispatch the showToast action with an error message
    dispatch(showToast({ type: 'error', message: error.message }));
  } finally {
    // Hide the toast message after 3 seconds
    setTimeout(() => {
      dispatch(hideToast());
    }, 3000);
  }
};

// Export the destination reducer
export default destinationSlice.reducer;
