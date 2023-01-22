import { Article, ArticleDemo } from "./../types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticles = createAsyncThunk<Article[]>(
  "fetchArticles",
  async () => {
    const { data } = await axios.get(
      `https://api.spaceflightnewsapi.net/v3/articles`
    );

    return data;
  }
);

export const fetchSingleArticle = createAsyncThunk<ArticleDemo>(
  "fetchSingleArticle",
  async (id: number) => {
    const { data } = await axios.get(
      `https://api.spaceflightnewsapi.net/v3/articles/${id}`
    );

    return data;
  }
);
