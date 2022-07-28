import {configureStore} from '@reduxjs/toolkit';
import beer from './reducers/beerList/beerListSlice';
import filter from './reducers/filter/filterSlice';
import beerItem from './reducers/currentBeer/currentBeerSlice';

export const store = configureStore({
  reducer: {
    beer,
    filter,
    beerItem
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
