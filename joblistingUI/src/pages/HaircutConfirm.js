import { Alert, Box, Paper, Snackbar, Stack, Typography } from "@mui/material";
import useFormContext from "../customhooks/useFormContext";
import { SubmitButton } from "./customstyles/Button.styles";
import { useState } from "react";
import ThumbsUpImg from "../images/thumbs_up.png"



const HaircutConfirm = () => {

  const { data, canSubmit } = useFormContext();
  const [successToast, setSuccessToast] = useState(false);

  const styles = {
    submit: {
      display: !canSubmit ? "none" : "block",
      width: "80%"
    }
  }

  const handleClose = () => {
    setSuccessToast(false);
  };

  const handleSubmit = e => {
    e.preventDefault()
    console.log(JSON.stringify(data))
    setSuccessToast(true)
  }


  const content = (
    <Box sx={{ mt:"40px", maxWidth:"500px"}}>

      <Stack direction={"column"} display={"flex"} alignItems={"center"} spacing={4}>
        <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center"}}>
          <img 
            src={ThumbsUpImg}
            alt={"image cannot be displayed"}  
            width= "200px" 
            height="200px"  
          />
          
          {/* an icon with a thumbs up wil prob go here, add a lil animation here for style points */}
          <Typography variant="h4">Thanks {data.haircutBookingName}!</Typography>
        </Box>
        <Typography textAlign={"center"}>Please make sure the details in the cart are correct before confirming your booking!</Typography>

        <SubmitButton
          sx={styles.submit}
          variant="contained"
          type="submit"
          disabled={!canSubmit}
          onClick={handleSubmit}
        >
          Book Haircut
        </SubmitButton>

        <Snackbar open={successToast} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" variant="filled">
            Booking successful! See you soon
          </Alert>
        </Snackbar>
      </Stack>

    </Box>
  );
  
  return content;
}
 
export default HaircutConfirm;