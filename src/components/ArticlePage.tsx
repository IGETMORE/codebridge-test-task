import { FC, useEffect } from "react";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchSingleArticle } from "../redux/articles/articlesAsync";
import { CustomButton } from "./UI/CustomButton";
import { CustomRouterLink } from "./UI/CustomRouterLink";

interface ArticleProps {
  id: number;
}

export const ArticlePage: FC<ArticleProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const article = useAppSelector(
    (state) => state.articlesReducer.singleArticle
  );

  useEffect(() => {
    dispatch(fetchSingleArticle(id));
  }, []);

  return (
    <Box display="flex" alignItems="center">
      <Box
        component="img"
        sx={{
          height: "245px",
          width: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        alt={article.title}
        src={article.imageUrl}
      />

      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #EAEAEA",
          borderRadius: "5px",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
          zIndex: 3,
          position: "absolute",
          width: "1290px",
          height: "500px",
          top: 150,
          margin: "0px 75px",
        }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{ margin: "35px 0 50px 0" }}
        >
          {article.title}
        </Typography>
        <Typography
          align="center"
          variant="body2"
          sx={{ padding: "0 75px 0 75px" }}
        >
          {article.summary}
        </Typography>
        <CustomRouterLink to={"/"}>
          <CustomButton
            startIcon={<ArrowBackIcon />}
            sx={{ position: "absolute", left: "75px", bottom: "10px" }}
          >
            Back to homepage
          </CustomButton>
        </CustomRouterLink>
      </Box>
    </Box>
  );
};
