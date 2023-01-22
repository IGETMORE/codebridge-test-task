import { FC, useCallback } from "react";
import { CustomFilterInput } from "./UI/CustomFilterInput";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setFilter } from "../redux/articles/articlesSlice";
import debounce from "lodash.debounce";

export const FilterBlock: FC = () => {
  const dispatch = useAppDispatch();
  const numberOfResults = useAppSelector(
    (state) => state.articlesReducer.numberOfResults
  );

  const changeHandler = (event: any) => {
    const target = event.target as HTMLInputElement;
    dispatch(setFilter(target.value));
  };

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 500), []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography sx={{ marginTop: "50px" }} variant="h3">
        Filter by keywords
      </Typography>
      <CustomFilterInput
        placeholder="Search..."
        startAdornment={<SearchIcon sx={{ opacity: "0.7" }} />}
        onChange={debouncedChangeHandler}
      />
      <Typography sx={{ margin: "40px 0 45px 0" }} variant="h3">
        Results: {numberOfResults}
      </Typography>
    </Box>
  );
};
