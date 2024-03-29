import useFormContext from "../customhooks/useFormContext";
import { Box, CircularProgress, FormControl, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import DatePicker from "react-horizontal-datepicker";
import "./customstyles/DatePicker.css"
import { CustomControlLabel } from "./customstyles/CustomRadio.styles";
import { ReactComponent as CheckedIcon } from "../images/filled_checked_icon.svg"
import { useFetch } from "../customhooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HaircutDatetime = () => {
  const { form, handleChange, handleDateChange } = useFormContext();
  const { allOptions, isLoading, error } = useFetch(`https://raw.githubusercontent.com/Solomon357/haircut-booking-local/main/endpoints/timedb.json`);
  const navigate = useNavigate();

  //find a way to make this error code re-usable later
  useEffect(()=> {
    if(error){
      navigate("/error")
    }
  }, [navigate, error])

  //because DatePicker import doesnt allow me to access button events through "handleDateChange", 
  //I'm accessing buttons through DOM instead to stop refreshing on click 
  const dateButtons = document.querySelectorAll("button[class^='DatePicker_button__']")

  for(let i = 0; i < dateButtons.length; i++){
    dateButtons[i].addEventListener("click", (e) => {e.preventDefault()})
  }

  const timeInputs = (
    <FormControl sx={{width: "80%", marginTop:"20px"}}>
      <FormLabel id="time-radiogroup-label">Pick a Time Slot</FormLabel>
      <RadioGroup
        aria-labelledby="time-radiogroup-label"
        value={allOptions.time}
        name="bookingTime"
        onChange={handleChange}
      >
        {allOptions.map((option) => {
          return(
            <CustomControlLabel
              labelPlacement="start"
              key={option._id} 
              checked={form.bookingTime === option.time} 
              value={option.time} 
              control={<Radio checkedIcon={<CheckedIcon fill="#57BFC6" width={"25px"}/>} />}  
              label= {option.time} 
            />
          )
        })}
      </RadioGroup>
    </FormControl>
  )

  return (
    <Box 
      sx={{ 
        display: "flex", 
        flexDirection:"column",
        width: "100%",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <Typography variant="h5">Pick Date</Typography>

      <DatePicker 
        getSelectedDay={handleDateChange}
        color={"#faa749"}
      />

      {isLoading && <Box color={"#faa749"}><CircularProgress color="inherit"/></Box>}

      {!isLoading && !error && timeInputs}
    </Box>
  );
}
 
export default HaircutDatetime;