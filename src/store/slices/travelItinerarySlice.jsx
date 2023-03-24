import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const { Configuration, OpenAIApi } = require("openai");

// The API token for the ChatGPT API (replace with your own token)
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_TOKEN,
});

// This thunk will make a POST request to the ChatGPT API with the provided payload
export const fetchTravelItinerary = createAsyncThunk(
  'travelItinerary/fetch',
  async ({ destination, duration }) => {
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      // Set the prompt to include the destination and duration
      prompt: `Create a travel itinerary for a trip to ${destination} for ${duration} days`,
      max_tokens: 300,
      // Set the temperature to control the randomness of the generated response
      temperature: 0.7,
    });
    // Return the generated response as the payload of the thunk
    return response.data.choices[0].text.trim();
  }
);

// Define the travelItinerary slice using createSlice
const travelItinerarySlice = createSlice({
  // Set the name of the slice to 'travelItinerary'
  name: 'travelItinerary',
  // Set the initial state of the slice
  initialState: {
    itinerary: null, // Holds the generated itinerary
    isShow: false,
    isLoading: false, // Set to true while the request is being made
    error: null, // Holds any error messages if the request fails
  },
  // Define any reducers (none in this case)
  reducers: {},
  // Define the extra reducers to handle the different actions dispatched by the fetchTravelItinerary thunk
  extraReducers: (builder) => {
    // When the thunk is pending, set isLoading to true and reset the error message
    builder
      .addCase(fetchTravelItinerary.pending, (state) => {
        state.itinerary = null;
        state.isLoading = true;
        state.error = null;
      })
      // When the thunk is fulfilled, store the generated itinerary in the state and set isLoading to false
      .addCase(fetchTravelItinerary.fulfilled, (state, action) => {
        state.itinerary = action.payload;
        state.isShow = true;
        state.isLoading = false;
        state.error = null;
      })
      // When the thunk is rejected, set itinerary to null, isLoading to false, and store the error message in the state
      .addCase(fetchTravelItinerary.rejected, (state, action) => {
        state.itinerary = null;
        state.isShow = true;
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Export the reducer function generated by createSlice
export default travelItinerarySlice.reducer;
