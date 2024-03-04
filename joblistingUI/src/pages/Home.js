import React, { useEffect, useState } from "react";
import { Typography, Button, Snackbar, Alert } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "../App.css"

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

  const content = (
    <div>
      <Typography sx={{ margin:"5%" }} variant="h3" align="center">
        Welcome! Click below to get started
      </Typography>
      <div>
        <ul className="ul">
          <li>
          <Button sx={{ margin:"2% 3%"}} variant="outlined">
            <Link to="/bookHaircut">
              Book a haircut
            </Link>
          </Button>
          </li>
          <li>
          <Button sx={{ margin:"2% 3%"}} variant="outlined">
            <Link to="/multiFormTest">
              Multipage Test
            </Link>
          </Button>
          </li>
        </ul>
        <Snackbar open={successToast} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" variant="filled">
            Booking successful! See you soon
          </Alert>
        </Snackbar>
      </div>
    </div>
  )

  return content
};

export default Home;
