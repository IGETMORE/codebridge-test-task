import { styled } from "@mui/material/styles";

import OutlinedInput from "@mui/material/OutlinedInput";

export const CustomFilterInput = styled(OutlinedInput)({
  "&.MuiOutlinedInput-root": {
    border: "1px solid #EAEAEA",
    width: "600px",
    height: "50px",
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
  },
  ".MuiOutlinedInput-input": {
    marginLeft: "20px",
    fontSize: "16px",
  },
});
