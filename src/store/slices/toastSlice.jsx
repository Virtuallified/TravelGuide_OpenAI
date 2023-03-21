import { createSlice } from '@reduxjs/toolkit';

const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    show: false,
    delay: 3000,
    autohide: true,
    title: '',
    message: ''
  },
  reducers: {
    showToast: (state, action) => {
      state.show = true;
      state.title = action.payload.title;
      state.message = action.payload.message;
    },
    hideToast: (state) => {
      state.show = false;
    }
  }
});

export const { showToast, hideToast } = toastSlice.actions;

export default toastSlice.reducer;
