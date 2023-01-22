import { Article, ArticleDemo } from "./../types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL_BASE = `https://api.spaceflightnewsapi.net/v3/articles/`;

export const fetchArticles = createAsyncThunk<Article[], string>(
  "fetchArticles",
  async (queryParam) => {
    const { data } = await axios.get(
      `${URL_BASE}?title_contains=${queryParam}&_limit=12`
    );

    return data;
  }
);

export const fetchSingleArticle = createAsyncThunk<ArticleDemo, number>(
  "fetchSingleArticle",
  async (id) => {
    const { data } = await axios.get(URL_BASE + id);

    return data;
  }
);
