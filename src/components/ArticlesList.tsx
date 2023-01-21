import { FC } from "react";
import { useAppSelector } from "../redux/hooks";
import { ArticleListCard } from "./ArticleListCard";
import Grid from "@mui/material/Grid";

export const ArticlesList: FC = () => {
  const articles = useAppSelector((state) => state.articlesReducer.articles);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {articles.map((item) => (
        <Grid item xs={2} sm={3} md={4} key={item.id}>
          <ArticleListCard {...item} key={item.id} />
        </Grid>
      ))}
    </Grid>
  );
};
