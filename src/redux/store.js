import { configureStore } from '@reduxjs/toolkit';
import blockReducer from './block/blockSlice';

const store = configureStore({
  reducer: {
    block: blockReducer,
  },
});

export default store;
