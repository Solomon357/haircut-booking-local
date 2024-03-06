import React, { useEffect, useState } from "react";
import { Snackbar, Alert, Box, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import "../App.css"
import HaircutBrand from "../images/HaircutBrand.jpg"
import { MainButton } from "./customstyles/Button.styles";

const Home = () => {
  const location = useLocation();
  const [successToast, setSuccessToast] = useState();

  useEffect(() => {
    if (location.state === null) {
      setSuccessToast(false)
    } else {
      setSuccessToast(location.state)
      window.history.replaceState({}, '') // so that snackbar does not repeat on refresh
    }
  }, [location])
  
  const handleClose = () => {
    setSuccessToast(false);
  };

  const styles = {
    main:{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#231f20"
    },
    content: {
      width:"50vh",
      height: "80vh",
      alignItems:"center",
      direction: "column",
      //border:"1px solid white",
      padding: "3%"
    }
  }


  const content = (
    <Box sx={styles.main} >
      
      <Stack sx={styles.content} spacing={8}>

        <Box width={"fit-content"} height={"fit-content"}>
          <img src={HaircutBrand} alt="haircutBrand" height={"300px"} width={"450px"} />
        </Box>
        
          <MainButton href="/bookHaircut" sx={{ padding:"6%", borderRadius: "20px", width:"100%" }} >
            Book a haircut
          </MainButton>  

          
          
          {/* <Button href="/multiFormTest" sx={{ padding:"3%", borderRadius: "20px" }} variant="outlined" >
              Multipage Test
          </Button> */}
      </Stack>  
    
      <Snackbar open={successToast} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" variant="filled">
          Booking successful! See you soon
        </Alert>
      </Snackbar>
      
      {/* attribution required will be a footer using absolute position once i've finished*/}
      {/* <a href="https://www.vecteezy.com/free-vector/haircut-logo">Haircut Logo Vectors by Vecteezy</a> */}
    </Box>
  )

  return content
};

export default Home;
