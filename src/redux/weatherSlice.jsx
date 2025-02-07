import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  query: 'london',
  error: null,
  loading: false,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    searchInput: (state, action) => {
      state.query = action.payload;
    },
    weatherInfo: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    errorHandle: (state, action) => {
      state.error = action.payload;
      state.data = null;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { weatherInfo, searchInput, errorHandle, setLoading } =
  weatherSlice.actions;

export default weatherSlice.reducer;
