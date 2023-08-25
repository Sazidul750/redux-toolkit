import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const api =
  "https://pixabay.com/api/?key=39035036-5755e06410c249f6cf803c6a1&q=yellow+flowers&image_type=photo&pretty=true&per_page=50&image_type=all";
const initailState = {
  isLoading: false,
  error: null,
  items: [],
};

export const fetchApi = createAsyncThunk("items/fetchApi", async () => {
  const res = await axios.get(api);
  return res.data;
});

const itemSlice = createSlice({
  name: "items",
  initialState: initailState,
  extraReducers: (builder) => {
    builder.addCase(fetchApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    });
    builder.addCase(fetchApi.rejected, (state, action) => {
      state.isLoading = false;
      state.items = [];
      state.error = action.error.message;
    });
  },
});

export default itemSlice.reducer;
