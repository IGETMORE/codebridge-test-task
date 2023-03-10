import { FC } from "react";
import { useAppSelector } from "../redux/hooks";
import { ArticleListCard } from "./ArticleListCard";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { FilterBlock } from "./FilterBlock";

export const ArticlesList: FC = () => {
  const articles = useAppSelector((state) => state.articlesReducer.articles);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "1290px",
        margin: "auto",
      }}
    >
      <FilterBlock />
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {articles.map((item) => (
          <Grid item xs={2} sm={3} md={4} key={item.id}>
            <ArticleListCard {...item} key={item.id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
