import { Typography } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";
import { PrevButton } from "../customstyles/Button.styles";
import { useMemo } from "react";

const BackButton = () => {
  const { setPage, disablePrev } = useFormContext();

  return useMemo(() => {
    const handlePrev = () => {
      setPage(prev => prev - 1)
    }
    
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
  }, [setPage, disablePrev])
}
 
export default BackButton;