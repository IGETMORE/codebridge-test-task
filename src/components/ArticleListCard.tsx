import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Icon } from "@iconify/react";
import { FC } from "react";
import { Article } from "../redux/types";
import { CustomButton } from "./UI/CustomButton";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { CustomRouterLink } from "./UI/CustomRouterLink";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectArticle } from "../redux/articles/articlesSlice";
import Highlighter from "react-highlight-words";

export const ArticleListCard: FC<Article> = ({
  publishedAt,
  title,
  summary,
  imageUrl,
  id,
}) => {
  const isLoading = useAppSelector((state) => state.articlesReducer.isLoading);
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.articlesReducer.filter);

  const sliceSummary = (txt: string) => {
    let slicedSummary = "";
    let counter = 0;

    for (let symbol of txt) {
      if (counter < 100) {
        slicedSummary += symbol;

        if (symbol !== " ") {
          counter++;
        }
      }
    }
    slicedSummary += "...";
    return slicedSummary;
  };

  return isLoading ? (
    <Skeleton animation="wave" width={400} height={530} />
  ) : (
    <CustomRouterLink to={`/${id}`} onClick={() => dispatch(selectArticle(id))}>
      <Card
        sx={{
          maxWidth: 400,
          height: 530,
          boxShadow: " 0px 8px 24px rgba(0, 0, 0, 0.05)",
          cursor: "pointer",
          border: "1px solid #EAEAEA;",
        }}
      >
        <CardMedia image={imageUrl} sx={{ height: 217 }} />
        <CardContent sx={{ padding: "25px 25px" }}>
          <Typography sx={{ marginBottom: "24px", opacity: 0.6 }} variant="h2">
            <Icon
              icon="akar-icons:calendar"
              style={{ top: "1px", position: "relative", marginRight: "3px" }}
            />{" "}
            {moment(publishedAt).format("LL")}
          </Typography>
          <Typography sx={{ marginBottom: "20px" }} variant="h1">
            <Highlighter
              searchWords={filter.split(" ")}
              autoEscape={true}
              textToHighlight={title}
            />
          </Typography>
          <Typography sx={{ marginBottom: "20px" }} variant="body1">
            <Highlighter
              searchWords={filter.split(" ")}
              autoEscape={true}
              textToHighlight={sliceSummary(summary)}
            />
          </Typography>
          <CustomButton
            endIcon={
              <ArrowForward
                sx={{
                  scale: 0.5,
                  position: "relative",
                  right: "6px",
                  top: "1px",
                }}
              />
            }
          >
            Read more
          </CustomButton>
        </CardContent>
      </Card>
    </CustomRouterLink>
  );
};
