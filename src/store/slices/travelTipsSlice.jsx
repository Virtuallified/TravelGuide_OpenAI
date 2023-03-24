import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Configuration, OpenAIApi } from "openai";

// The API token for the ChatGPT API (replace with your own token)
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_TOKEN,
});

// Define the async thunk to fetch travel tips from ChatGPT
export const fetchTravelTips = createAsyncThunk(
  "travelTips/fetchTravelTips",
  async (destination) => {
    // try {
    // Make a POST request to the ChatGPT API to get travel tips
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      // Set the prompt to include the destination and duration
      prompt: `Give me some travel tips for ${destination}.`,
      max_tokens: 300,
      // Set the temperature to control the randomness of the generated response
      temperature: 0.7,
    });
    // Return the generated travel tips
    return response.data.choices[0].text.trim();
    // Enable the below catch block to get the error message inside PAYLOAD //
    // ----------------------------------------------------------------------
    // } catch (error) {
    //   // Handle errors by returning the error message
    //   return error.message;
    // }
  }
);

// Define the travel tips slice
const travelTipsSlice = createSlice({
  name: "travelTips",
  initialState: {
    destination: null,
    tips: null,
    show: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Start loading when the fetchTravelTips async thunk is called
      .addCase(fetchTravelTips.pending, (state) => {
        state.tips = null;
        state.loading = true;
        state.error = null;
      })
      // Update state with the fetched travel tips when successful
      .addCase(fetchTravelTips.fulfilled, (state, action) => {
        state.tips = action.payload;
        state.show = true;
        state.loading = false;
      })
      // Update state with the error message when unsuccessful
      .addCase(fetchTravelTips.rejected, (state, action) => {
        state.error = action.error.message;
        state.show = true;
        state.loading = false;
      });
  },
});

export default travelTipsSlice.reducer;