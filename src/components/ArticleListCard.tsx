import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import moment from "moment";
import { FC } from "react";
import { Article } from "../redux/types";
import { styled } from "@mui/material/styles";
import ArrowForward from "@mui/icons-material/ArrowForward";

export const CustomButton = styled(Button)({
  textTransform: "none",
  fontFamily: ["Montserrat"].join(","),
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: "24px",
  color: "#363636",
  padding: 0,
  border: "none",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "none !important",
  },
});

export const ArticleListCard: FC<Article> = ({
  publishedAt,
  title,
  summary,
  imageUrl,
}) => {
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

  return (
    <Card
      sx={{
        maxWidth: 400,
        height: 530,
        boxShadow: " 0px 8px 24px rgba(0, 0, 0, 0.05)",
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
          {title}
        </Typography>
        <Typography sx={{ marginBottom: "20px" }} variant="body1">
          {sliceSummary(summary)}
        </Typography>
        <CardActions sx={{ padding: 0 }}>
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
        </CardActions>
      </CardContent>
    </Card>
  );
};
