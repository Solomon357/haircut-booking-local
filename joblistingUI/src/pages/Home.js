import React, { useEffect, useState } from "react";
import { Snackbar, Alert, Box, Stack, Link } from "@mui/material";
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
      width:"70vh",
      height: "80vh",
      alignItems:"center",
      direction: "column",
      //border:"1px solid white",
      padding: "3%"
    },
    image:{
      width:"100%",
      maxWidth: "450px", 
      height:"300px",
      //border: "1px solid white"
    }
  }


  const content = (
    <Box sx={styles.main} >
      
      <Stack sx={styles.content} spacing={8}>

        <Box
          component={"img"} 
          sx={styles.image}
          src={HaircutBrand}
          alt="haircut Logo"
        />
        
          <MainButton href="/bookHaircut" sx={{ padding:"4%", borderRadius: "20px", width:"100%", maxWidth:"450px"}} >
            Book a haircut
          </MainButton> 
      </Stack>  
    
      <Snackbar open={successToast} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" variant="filled">
          Booking successful! See you soon
        </Alert>
      </Snackbar>
      
      <Link sx={{position: "fixed", bottom: "20px", right: "20px" }} href="https://www.vecteezy.com/free-vector/haircut-logo">Haircut Logo Vectors by Vecteezy</Link>
    </Box>
  )

  return content
};

export default Home;
