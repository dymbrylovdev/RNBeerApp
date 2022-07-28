import {createSlice} from '@reduxjs/toolkit';
import {getBeers} from './AsyncActions/actionBeer';
import {BeerState, Status} from './types';

const initialState: BeerState = {
  beers: [],
  loading: true,
  status: Status.LOADING,
};

export const beerListSlice = createSlice({
  name: 'beerList',
  initialState,
  reducers: {
    addBeers: (state, action) => {
    },
  },
  extraReducers: builder => {
    builder.addCase(getBeers.pending, (state) => {
      state.loading = true;
      state.status = Status.LOADING;
    });
    builder.addCase(getBeers.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.status = Status.SUCCESS;
      state.beers = state.beers.concat(payload);
    });
    builder.addCase(getBeers.rejected, (state) => {
      state.loading = false;
      state.status = Status.ERROR;
    });
  },
});

export const {addBeers} = beerListSlice.actions;

export default beerListSlice.reducer;
