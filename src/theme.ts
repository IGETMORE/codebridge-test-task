import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
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
    body2: {
      color: "#000000",
      fontSize: "18px",
      lineHeight: "27px",
      fontWeight: 400,
    },
    button: {
      color: "#363636",
      fontSize: 16,
      fontWeight: 700,
    },
  },
});
