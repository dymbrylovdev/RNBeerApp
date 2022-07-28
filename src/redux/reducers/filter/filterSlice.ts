import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FilterSliceState} from './types';

const initialState: FilterSliceState = {
  page: 1,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPage(state) {
      state.page = ++state.page;
    },
  },
});

export const { setPage} = filterSlice.actions;
export default filterSlice.reducer;
