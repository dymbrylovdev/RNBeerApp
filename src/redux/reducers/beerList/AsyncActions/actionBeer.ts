import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {setPage} from '../../filter/filterSlice';
import {addBeers} from '../beerListSlice';
import {IBeer, SerchParams} from '../types';

export const getBeers = createAsyncThunk<IBeer[], SerchParams>(
  'beers/getBeersFromPage ',
  async function ({page}, {dispatch}) {
    let data = await new Promise<IBeer[]>((resolve, rejected) =>
      axios
        .get<IBeer[]>(
          `https://api.punkapi.com/v2/beers?&per_page=10&page=${page}`,
        )
        .then(xsh => {
          dispatch(addBeers(xsh.data));
          dispatch(setPage());
          resolve(xsh.data);
        })
        .catch(err => {
          rejected(err);
        }),
    );
    console.log(data[0]);
    return data;
  },
);
