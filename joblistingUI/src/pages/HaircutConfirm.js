import { Alert, Box, Snackbar, Stack, Typography } from "@mui/material";
import useFormContext from "../customhooks/useFormContext";
import { ProgressButton } from "./customstyles/Button.styles";
import { useState } from "react";
import ThumbsUpImg from "../images/thumbs_up.png"
import { useNavigate } from "react-router-dom";

const HaircutConfirm = () => {
  const { form, canSubmit } = useFormContext();
  const [errorToast, setErrorToast] = useState(false);
  const navigate = useNavigate();
  const styles = {
    submit: {
      display: !canSubmit ? "none" : "block",
      width: "80%"
    }
  }

  const handleClose = () => {
    setErrorToast(false)
  };

  //tester submit function
  const handleSubmit = e => {
    e.preventDefault();
    console.log(JSON.stringify(form))
    navigate('/', {state: true});
  }

  // proper handleSubmit function here
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:8081/submitpost", {
  //     method: "POST", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(form),
  //   })
  //   .then((response) => {
  //     console.log(response)
  //     console.log("Success!")
  //     navigate('/', {state: true})
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error)
  //     setErrorToast(true)
  //   });
    
  // };


  const content = (
    <Box sx={{ mt:"40px", maxWidth:"500px"}}>

      <Stack direction={"column"} display={"flex"} alignItems={"center"} spacing={4}>
        <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center"}}>
          <img 
            src={ThumbsUpImg}
            alt={"cannot be displayed"}  
            width= "200px" 
            height="200px"  
          />
      
          <Typography variant="h4">Thanks {form.haircutBookingName}!</Typography>
        </Box>
        <Typography textAlign={"center"}>Please make sure the details in the cart are correct before confirming your booking!</Typography>

        <ProgressButton
          sx={styles.submit}
          variant="contained"
          type="submit"
          disabled={!canSubmit}
          onClick={handleSubmit}
        >
          Book Haircut
        </ProgressButton>

        <Snackbar open={errorToast} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" variant="filled">
            Something went wrong! Please try again
          </Alert>
        </Snackbar>
      </Stack>

    </Box>
  );
  
  return content;
}
 
export default HaircutConfirm;