// import fs from 'fs';
// import path from 'path';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

// const logFilePath = path.join(__dirname, '..', 'logs', 'querylog.txt');

const initialState = {};

export const queryLogSlice = createSlice({
  name: 'queryLog',
  initialState,
  reducers: {
    logQuery: (state, action) => {
      // Get the user's IP address, destination, and duration from the action payload
      const { ipAddress, destination, duration, createdBy } = action.payload;

      // Generate a unique ID for the log using uuid
      const id = uuidv4();

      // Get the current UTC timestamp using moment
      const createdAt = moment.utc().format();

      // Create a log object with the required properties
      const log = { id, ipAddress, destination, duration, createdBy, createdAt };

      // Append the log object to the querylog.txt file
      // fs.appendFileSync(logFilePath, JSON.stringify(log) + '\n');

      // Add the log object to the Redux store
      state[id] = log;
    },
  },
});

export const { logQuery } = queryLogSlice.actions;

export default queryLogSlice.reducer;
