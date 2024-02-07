import { useState } from 'react';
import {Alert, AppBar, Box ,Container,Divider, Grid, IconButton, Paper, Snackbar, Stack, Toolbar, Typography } from '@mui/material';
import { Button } from "@mui/material"
//import { Link } from "react-router-dom"
import useFormContext from '../customhooks/useFormContext';
import FormInputs from './FormInputs';
import FormProgress from './FormProgress';
import EmailIcon from '@mui/icons-material/Email';
import { ReactComponent as HaircutIcon } from "../images/haircut_icon.svg"  
import HomeIcon from '@mui/icons-material/Home';
const HaircutForm = () => {
  
  // const [value, setValue] = React.useState('1');
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const {
    page,
    setPage,
    data,
    title,
    canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    submitHide
  } = useFormContext();

  const [successToast, setSuccessToast] = useState(false)

  const handlePrev = () => {
    setPage(prev => prev - 1)
  }

  const handleNext = () => {
    setPage(next => next + 1)
  }

  const handleClose = () => {
    setSuccessToast(false);
  };

  const handleSubmit = e => {
    e.preventDefault()
    console.log(JSON.stringify(data))
    setSuccessToast(true)
  }

  // const success = (
  //   <Snackbar open={successToast} autoHideDuration={6000} onClose={handleClose}>
  //     <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: 'auto' }}>
  //       Booking successful! See you soon
  //     </Alert>
  //   </Snackbar>
  // )

  //componenets of navbar

  //if im going to do this i might aswell just create their own separate components in a different file
  //but for now...
  const headerBar = (
    <Container sx={{ marginLeft: {xs: "0px", md: "75px"} }} >
      <Toolbar
        disableGutters
        sx={{justifyContent:"space-between"}}
      >
        <Stack direction="row" alignItems={"center"} >
          <HaircutIcon />
          <Typography
           variant='h6' 
           align='center'
           sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: { xs: '0.1rem', sm: '0.2rem' },
              fontSize: { xs: '1rem', sm: '1.2rem' },
            }}
          >
            CompanyTitle
          </Typography>
        </Stack> 

        <Typography variant='h3' align='center'>{title[page]}</Typography>

        <IconButton href='/' size='large' sx={{color: 'white'}}>
          <HomeIcon />
        </IconButton>  

      </Toolbar>
    </Container>
  );

  const footer = (
    <Container>
      <Toolbar sx={{ justifyContent: "space-between", border: "1px solid black", color:"white"}}>

        <Stack spacing={1} direction={"row"}>
          <EmailIcon />
          <Typography>Solomonoddy@hotmail.com</Typography>
        </Stack>

        <Stack spacing={"20px"} direction={"row"}>
          <Typography>Terms & Conditions</Typography>
          <Typography>Privacy Policy</Typography>
        </Stack>

      </Toolbar>
    </Container>
  )

  const checkout = (
    // checkout box + next button
    <Stack direction={"column"} gap={"5px"} >

      <Typography variant='h5'>Checkout</Typography>

      <Stack padding={"10px"} direction="column" justifyContent={"center"} gap={"10px"} sx={{border: "3px solid gray", borderRadius: "15px", height:"200px" }}>

        <Stack direction={"column"} gap={"2px"}>
          <Typography>{data.bookingDate}</Typography>
          <Typography>{data.bookingTime}</Typography>
        </Stack>

        <Divider variant='middle'/>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography>{data.haircutType}</Typography>
          <Typography>£{data.total}</Typography>
        </Stack>

        <Divider variant='middle'/>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography sx={{fontWeight: "bold"}}>Total</Typography>
          <Typography sx={{fontWeight: "bold"}}>£{data.total}</Typography>
        </Stack>
      </Stack>

      {/* Make a custom style for the buttons */}
      <Box>
        <Button
        sx={{ width: "100%", margin: "2% auto", backgroundColor: "#57BFC6" }}
        variant="contained"
        type="button"
        onClick={handleNext}
        disabled={disableNext}
        >
          Continue
        </Button> 
      </Box>
    </Stack>
  )

  const content = (
    <Box
      component={"main"}
      className='page-container'
      sx={{
        width:"100%", 
        position: "relative"
      }} 
    >

      <AppBar 
        elevation={0}
        className='header-content'
        component={"header"} 
        sx={{ 
          //border: "1px solid black",
          //height: "100px",
          //paddingY: "30px",
          position: "sticky",
          top: "0", 
          backgroundColor: "#57bfc6", 
          //background: "linear-gradient(0deg, #ffffff 10%, #57bfc6 40%, #57bfc6 100%)",
          //backgroundColor: "red"
        }}
      >
        {headerBar}
      </AppBar>

      <FormProgress />

      <Box 
        className='form-content'
        sx={{
          height: "fit-content",
          paddingBottom: "7rem", // has to be more than footer
          paddingTop: "4rem",
        }}
      >
          <form onSubmit={handleSubmit}>
            {/* <Grid container spacing={2}> */}

              {/* <Grid item xs={12} md={6} position={"sticky"} top={"64px"} sx={{ backgroundColor: "lightcoral" }}> */}
                {/* Search component goes here */}
              {/* </Grid> */}

              {/* <Grid item xs={12} md={6}></Grid> */}

              {/* <Grid item xs={12} md={6} sx={{ border: "1px solid black" }}> */}
              <Box width={{xs:"100%", md: "50%"}} sx={{ border: "1px solid black" }}>
                <FormInputs />
              </Box>
              {/* </Grid> */}

              {/* <Grid item xs={12} md={6} position={"relative"} sx={{ padding: "8px", border: "1px solid black"}}> */}
              <Box 
                sx={{ 
                  padding: "8px", 
                  border: "1px solid black", 
                  //width:{xs:"100%", md: "50%"},
                  position:"fixed",
                  top:"190px",
                  right:"4%",
                  width:"636px"
                  }}>
                {/* This will be its own Component for readability purposes */}
                {checkout} 
              </Box>
              {/* </Grid> */}

              {/* <Grid item xs={12} md={12} paddingX={"40px"}> */}
              <Box paddingX={"20px"} marginY={"40px"} width={{xs:"100%", md: "50%"}} border={"1px solid black"}>
                {/* I will put all buttons in a Stack later */}
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Button
                    sx={{ width: "20%", backgroundColor: "#E39C9C" }}
                    variant="contained"
                    type="button"
                    onClick={handlePrev}
                    disabled={disablePrev}
                  >
                    Go Back
                  </Button>
                
          
                  <Button
                  //sx={{ width: "20%", display: !canSubmit ? "none" : "block" }}
                  variant="contained"
                  type="submit"
                  disabled={!canSubmit}
                  >
                    Submit
                  </Button>
                </Stack>
              
                
                <Snackbar open={successToast} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: 'auto' }}>
                    Booking successful! See you soon
                  </Alert>
                </Snackbar>
              </Box>
              {/* </Grid> */}
            {/* </Grid> */}
          </form>
      </Box>


      <Box 
        sx={{ 
          position: "absolute",
          bottom: "0",
          width: "100%",
          //height: "5rem",
          //border: "1px solid black",
          display:"flex", 
          //justifyContent:"center", 
          alignItems:"flex-end", 
          backgroundColor: "#57bfc6", 
         // background: "linear-gradient(180deg, #ffffff 10%, #57bfc6 70%, #57bfc6 100%)",
        }} 
        component={"footer"}
      > 
        {footer}
      </Box>        

    </Box>
  );
  return content
}

export default HaircutForm;