import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  items: [],
};

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch(`http://api.tvmaze.com/shows`);
  const data = await response.json();
  return data;
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchProducts.pending](state) {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },

    [fetchProducts.rejected](state) {
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;
