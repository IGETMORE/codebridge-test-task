import { Article, ArticleDemo } from "./../types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiBase = `https://api.spaceflightnewsapi.net/v3/articles/`;
export const fetchArticles = createAsyncThunk<Article[]>(
  "fetchArticles",
  async () => {
    const { data } = await axios.get(apiBase);

    return data;
  }
);

export const fetchSingleArticle = createAsyncThunk<ArticleDemo>(
  "fetchSingleArticle",
  async (id) => {
    const { data } = await axios.get(apiBase + id);

    return data;
  }
);
