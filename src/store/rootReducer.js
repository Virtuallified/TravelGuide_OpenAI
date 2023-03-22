import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import destinationReducer from '../store/slices/destinationSlice';
import toastReducer from './slices/toastSlice';
import itineraryReducer from './slices/travelItinerarySlice';
import tipsReducer from './slices/travelTipsSlice';
import logReducer from './slices/queryLogSlice';

const rootReducer = combineReducers({
  form: formReducer, // include formReducer in the combineReducers call
  destination: destinationReducer,
  toast: toastReducer,  // Show alerts
  travelItinerary: itineraryReducer,  // Pass in the travelItineraryReducer as a slice to the store
  travelTips: tipsReducer,  // Travel Tips
  queryLog: logReducer,   // Log query
});

export default rootReducer;