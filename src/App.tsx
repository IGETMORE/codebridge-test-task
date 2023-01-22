import { ThemeProvider } from "@mui/material/styles";
import { FC, useEffect } from "react";
import { ArticlesList } from "./components/ArticlesList";
import { fetchArticles } from "./redux/articles/articlesAsync";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import { ArticlePage } from "./components/ArticlePage";
import { theme } from "./theme";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const articleId = useAppSelector((state) => state.articlesReducer.articleId);
  const filter = useAppSelector((state) => state.articlesReducer.filter);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [filter]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/:articleId" element={<ArticlePage id={articleId} />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
