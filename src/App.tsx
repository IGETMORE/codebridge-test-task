import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FC, useEffect } from "react";
import { ArticlesList } from "./components/ArticlesList";
import { fetchArticles } from "./redux/articles/articlesAsync";
import { useAppDispatch } from "./redux/hooks";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const App: FC = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Montserrat"].join(","),
      h1: {
        color: "#363636",
        fontSize: 24,
        fontWeight: 400,
        lineHeight: "29px",
      },
      h2: {
        color: "#363636",
        fontSize: 14,
        lineHeight: "21px",
        fontWeight: 400,
      },
      body1: {
        color: "#363636",
        fontSize: 16,
        fontWeight: 400,
        lineHeight: "24px",
      },
      button: {
        color: "#363636",
        fontSize: 16,
        fontWeight: 700,
      },
    },
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ padding: "0px 75px !important" }}>
        <Box>
          <ArticlesList />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
