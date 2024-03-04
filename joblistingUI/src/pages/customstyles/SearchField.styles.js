import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const SearchField = styled(TextField)({
  borderRadius: "40px",
  width: "55px",
  transition: "all 0.5s",
  cursor: "pointer",
  "&.Mui-focused": {
    width: "200px",
    float: "left",
    backgroundColor: "white",
    borderRadius: "4px",
    zIndex: "10",
  },
})