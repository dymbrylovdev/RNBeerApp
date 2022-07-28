import {createSlice} from '@reduxjs/toolkit';
import {BeerItemSliceState} from './types';

const initialState: BeerItemSliceState = {
  beer: undefined,
};

const currentBeerSlice = createSlice({
  name: 'beerItem',
  initialState,
  reducers: {
    setBeerItem(state, actions) {
      state.beer = actions.payload;
    },
  },
});

export const {setBeerItem} = currentBeerSlice.actions;
export default currentBeerSlice.reducer;
