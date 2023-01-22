import { styled } from "@mui/material/styles";

import Button from "@mui/material/Button";

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
