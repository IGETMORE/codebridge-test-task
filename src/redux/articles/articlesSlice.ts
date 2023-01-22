import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticlesSliseState } from "../types";
import { fetchArticles, fetchSingleArticle } from "./articlesAsync";

const initialState: ArticlesSliseState = {
  articles: [],
  filter: "",
  isLoading: true,
  articleId: 17957,
  singleArticle: {},
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    selectArticle: (state, action: PayloadAction<number>) => {
      state.articleId = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchSingleArticle.fulfilled, (state, action) => {
      state.singleArticle = { ...action.payload };
    });
  },
});

export const { selectArticle, setFilter } = articlesSlice.actions;

export default articlesSlice.reducer;
