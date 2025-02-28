import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Features/counters/Counterslice';

 export const Store = configureStore({
  reducer: {
    counter: counterReducer, 
  },
});
