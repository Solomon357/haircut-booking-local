import React, { useEffect, useState } from "react";
import { Snackbar, Alert, Box, Stack, IconButton, Typography, Link } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import "../App.css"
import HaircutBrand from "../images/HaircutBrand.jpg"
import { MainButton } from "./customstyles/Button.styles";
import EmailIcon from '@mui/icons-material/Email';
const Home = () => {
  const location = useLocation();
  const [successToast, setSuccessToast] = useState();

  const styles = {
    main:{
      minHeight: "100vh",
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
      padding: "3%",
      color: "antiquewhite"
    },
    image:{
      width:"100%",
      height:"auto",
      maxWidth: "500px",
      maxHeight: "300px" 
      
    },
    links:{
      display:"flex",
      position: "absolute", 
      bottom: "20px",
      justifyContent:"space-between",
      width:"95%",
      alignItems:"center",
    },
    texts:{
      fontFamily: [
        "Montserrat", 
        "sans-serif"
      ].join(",")
    }
  }

  const handleClose = () => {
    setSuccessToast(false);
  };

  useEffect(() => {
    if (location.state === null) {
      setSuccessToast(false)
    } else {
      setSuccessToast(location.state)
      window.history.replaceState({}, '') // so that snackbar does not repeat on refresh
    }
  }, [location])
  
  return (
    <Box sx={styles.main}>
      
    <Stack sx={styles.content} spacing={8}>

      <Box
        component={"img"} 
        sx={styles.image}
        src={HaircutBrand}
        alt="haircut Logo"
      />
      
        <MainButton LinkComponent={RouterLink} to="/bookHaircut" sx={{ padding:"4%", borderRadius: "20px", width:"100%", maxWidth:"450px"}} >
          <Typography fontWeight={"medium"} sx={styles.texts}>Book a haircut</Typography>
        </MainButton> 
    </Stack>  
  
   
    <Stack direction={"row"} sx={styles.links} flexWrap={"wrap"} color={"antiquewhite"}>
      
      <Stack direction={"row"} alignItems={"center"}>
        <IconButton href="mailto:solomonoddy@hotmail.com">
          <EmailIcon htmlColor="antiquewhite"/>
        </IconButton>

        <Link href="mailto:solomonoddy@hotmail.com" color="inherit" underline="hover">
          <Typography sx={styles.texts}>Solomonoddy@hotmail.com</Typography>
        </Link>
      </Stack>
    
      <Link href="https://www.vecteezy.com/free-vector/haircut-logo" color="inherit" underline="hover">
        <Typography sx={styles.texts}>Haircut Logo Vectors by Vecteezy</Typography>
      </Link>

    </Stack>

    <Snackbar open={successToast} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" variant="filled">
        <Typography sx={styles.texts}>Booking successful! See you soon </Typography>
      </Alert>
    </Snackbar>

  </Box>
  );

};

export default Home;
