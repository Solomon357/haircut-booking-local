import { useState } from 'react';
import {Alert, Box ,Paper, Snackbar, Typography } from '@mui/material';
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import useFormContext from '../customhooks/useFormContext';
import FormInputs from './FormInputs';
import FormProgress from './FormProgress';



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


  const content = (
    <>
      <Box sx={{ display:"flex", flexDirection:"row", justifyContent:"center"}}>
        <Typography variant='h3'sx={{ margin:"2%"}} align='center'>{title[page]}</Typography>
        <Button sx={{ margin:"2% 3%"}} variant="outlined"><Link to="/">Home</Link></Button>
      </Box>

      
      <form onSubmit={handleSubmit}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <Paper sx={{ padding:"2%"}} elevation={3}>
            <FormProgress />

            <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
              {title[page]}
            </Typography>

            <FormInputs />

            {/* <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Haircut Type" value="0" />
                  <Tab label="Booking Name" value="1" />
                  <Tab label="Professional" value="2" />
                  <Tab label="Booking Date" value="3" />
                </TabList>
              </Box>
              <TabPanel value="0"><Create /></TabPanel>
              <TabPanel value="1"><Create /></TabPanel>
              <TabPanel value="2"><Create /></TabPanel>
              <TabPanel value="3"><Create /></TabPanel>
            </TabContext> */}


            
          
            {/* I will put all of this in a Stack later */}
            <Button
              sx={{ width: "20%", margin: "2% auto" }}
              variant="contained"
              type="button"
              onClick={handlePrev}
              disabled={disablePrev}
            >
              Prev
            </Button>

            <Button
              sx={{ width: "20%", margin: "2% auto" }}
              variant="contained"
              type="button"
              onClick={handleNext}
              disabled={disableNext}
            >
              Next
            </Button>

            <Button
              sx={{ width: "20%", margin: "2% auto" }}
              variant="contained"
              type="submit"
              disabled={!canSubmit}
            >
              Submit
            </Button>

            <Snackbar open={successToast} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: 'auto' }}>
                Booking successful! See you soon
              </Alert>
            </Snackbar>

            <Box> Total = £{data.total}</Box>
          </Paper>
        </Box>
      </form>
    </>
  );
  return content
}

export default HaircutForm;