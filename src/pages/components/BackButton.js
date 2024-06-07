import { Typography } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";
import { PrevButton } from "../customstyles/Button.styles";
import { useMemo } from "react";

const BackButton = () => {
  const { handlePrev, disablePrev } = useFormContext();

  return useMemo(() => {
  
    return (
      <PrevButton
        sx={{ marginY:"40px" }}
        variant="contained"
        type="button"
        onClick={handlePrev}
        disabled={disablePrev}
      >
        <Typography fontWeight={"medium"}>Go Back</Typography>
      </PrevButton>   
    );
  }, [handlePrev, disablePrev])
}
 
export default BackButton;