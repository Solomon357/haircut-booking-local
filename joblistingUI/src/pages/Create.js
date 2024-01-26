import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Snackbar,
  Alert
} from "@mui/material";



//import { useNavigate } from "react-router-dom";

//for date i want my "min" prop to always be this current date 

//i will most likely just import moment.js to handle date but for now...
//creating variables to get current date
let nowDate = new Date(); 
let currentDate = nowDate.getFullYear()+'-'+(nowDate.getMonth()+1)+'-'+nowDate.getDate();

//now to format the current date in a way that can be passed through
function formatDate(date) {
  let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}
const initial = { haircut: [], name: "", barber: [], date: formatDate(currentDate), price: 0 };

const Create = () => {
  
  const haircutOptions = [
    {
      haircutName: "Skin Fade,30mins-45mins,12"
    },
    {
      haircutName: "Grade 1 all over,30mins,7"
    },
    {
      haircutName: "Beard Trim,30mins,7"
    }
  ];
  
  // in a working state, barberName[2] will be decided by the value in the mongoDB
  const barberOptions = [
    {
      barberName: "Jeff,Apprentice,5" 
    },
    {
      barberName: "Jonny,Mid-level,4"
    },
    {
      barberName: "Taylor,Expert,3"
    }
  ];

  //const navigate = useNavigate();
  const [form, setForm] = useState(initial);
  const [successToast, setSuccessToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);

  const handleClose = () => {

    setSuccessToast(false);
    //because both will never be on at the same time
    setErrorToast(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/submitpost", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => console.log(response))
      .then((data) => {
        console.log("Success:", data);
        //i can add a toast here that says "booking successful"
        setSuccessToast(true)
      })
      .catch((error) => {
        console.error("Error:", error);
        // I can add a toast here that says something like "something went wrong..."
        setErrorToast(true)
      });
      //navigate('/employee/feed');
      //window.location.reload();
  };

  const { name, price, date } = form;
  

  const handleHaircutChange = (e) => {

    let haircutValue = e.target.value; // expected return "haircut,time,price"
    haircutValue = haircutValue.split(","); //in order to create an array of substrings
    haircutValue[2] = +haircutValue[2]; //type convert from str to number

    setForm({...form , haircut : haircutValue, price : haircutValue[2]}); //now data is in a form that can be passed to mongo

    
   console.log(haircutValue) // expected output example => ['Skin Fade', '30mins-45mins', 12]
  }

  const handleBarberChange = (e) => {
    
    let barberValue = e.target.value;
    barberValue = barberValue.split(",");
    barberValue[2] = +barberValue[2];
    
    //price depends on which barber is cutting hair.
    if(barberValue[1] === "Apprentice"){
      setForm({...form , barber : barberValue, price : form.haircut[2]});
    } else if(barberValue[1] === "Mid-level"){
      setForm({...form , barber : barberValue, price : form.haircut[2] + 3});
    } else if(barberValue[1] === "Expert"){
      setForm({...form , barber : barberValue, price : form.haircut[2] + 5});
    }

    console.log(barberValue) //expected output example => ['Jeff', 'Junior', 5]
  }

  return (
    <Paper sx={{ padding:"2%"}} elevation={3}>
      <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
        Book a haircut
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {/* we will have haircut options here as a radio button*/}
          <Box sx={{ margin:"1% auto"}}>
            <h3>Type of haircut?</h3>
            <ul>
              {haircutOptions.map(({ haircutName }, index) => {
                //convert string option to string array so we can use separate words
                let haircutArr = haircutName.split(",");
                return (
                  <li key={index}>
                    <div >
                      <div>
                        <input
                          type="radio"
                          id={`haircut-radio-${index}`}
                          name="haircutOptions"
                          value={haircutName}
                          onChange={handleHaircutChange}  
                        />
                        <label htmlFor={`haircut-radio-${index}`}>{haircutArr[0] + " from £" + haircutArr[2]}</label>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Box>

          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            label="Booking Name"
            variant="outlined"
            value={name}
          />

          <Box sx={{ margin:"1% auto"}}>
            <h3>Which barber would you like?</h3>
            <ul>
              {barberOptions.map(({ barberName }, index) => {

                let barberArr = barberName.split(",");

                return (
                  <li key={index}>
                    <div >
                      <div>
                        <input
                          type="radio"
                          id={`barber-radio-${index}`}
                          name="barberOptions"
                          value={barberName}
                          onChange={handleBarberChange}  
                        />
                        <label htmlFor={`barber-radio-${index}`}>{barberArr[0] +" - " + barberArr[1] +" (£ look at price)"}</label>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Box>

          {/*TextField below will be Date of booking */}
          <TextField
          type="date"
          sx={{ width: "50%", margin: "2% auto" }}
          //required
          //multiline
          rows={4}
          onChange={(e) => {
            setForm({ ...form, date: e.target.value });
            console.log(date); //expected output: "yyyy-mm-dd"
          }}
          //label="Job-desc"
          variant="outlined"
          value={date}
          />

          <TextField
            min="0"
            type="number"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            //price shouldnt be able to be touched by the user, price should change depending on barber chosen
            //will prob have to make my own function that sets price to the value of haircutName[2]
            //onChange={(e) => setForm({ ...form, price: e.target.value })}
            label="Price"
            variant="outlined"
            disabled = {true}
            value={price}
          />

          <Button
            sx={{ width: "50%", margin: "2% auto" }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>

          <Snackbar open={successToast} autoHideDuration={6000} onClose={handleClose} >
            <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: 'auto' }}>
              Booking successful! See you soon
            </Alert>
          </Snackbar>

          <Snackbar open={errorToast} autoHideDuration={6000} onClose={handleClose} >
            <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: 'auto' }}>
              Something went wrong! Please try again
            </Alert>
          </Snackbar>

        </Box>
      </form>
    </Paper>
  );
};

export default Create;
