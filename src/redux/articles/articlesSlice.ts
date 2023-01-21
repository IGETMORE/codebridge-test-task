import { createSlice } from "@reduxjs/toolkit";
import { ArticlesSliseState } from "../types";
import { fetchArticles } from "./articlesAsync";

const initialState: ArticlesSliseState = {
  articles: [],
  filter: "",
  isLoading: true,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.isLoading = false;
    });
  },
});

export default articlesSlice.reducer;
