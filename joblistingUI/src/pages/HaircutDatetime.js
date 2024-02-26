import useFormContext from "../customhooks/useFormContext";
import { Box, CircularProgress, FormControl, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import DatePicker from "react-horizontal-datepicker";
import "./customstyles/DatePicker.css"
import { CustomControlLabel } from "./customstyles/CustomRadio.styles";
import { ReactComponent as CheckedIcon } from "../images/filled_checked_icon.svg"
import { useFetch } from "../customhooks/useFetch";


const HaircutDatetime = () => {
  const { form, handleChange, handleDateChange } = useFormContext();
  const { allOptions, isLoading, error } = useFetch(`http://localhost:8080/allTimeInfo`);

  //for my time radio btns i could have it in a structure like:
  //{ time: 17:30, isbooked: false} or ["17:30", false]

  // where if checked it will change false to true and also once submitted
  // will change the value in mongodb to deal with availability


  //to stop the DatePicker buttons from refreshing on click i need 
  //to access buttons from DOM because the import doesnt allow me to access button event 
  //through "handleDateChange"
  const dateButtons = document.querySelectorAll("button[class^='DatePicker_button__']")

  for(let i = 0; i < dateButtons.length; i++){
    dateButtons[i].addEventListener("click", (e) => {e.preventDefault()})
  }

  const timeInputs = (
    <FormControl sx={{width: "80%"}}>
      <FormLabel id="time-radiogroup-label">Pick Time Slot</FormLabel>
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
              key={option.id} 
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

  const content = (      
    <Box 
      sx={{ 
        display: "flex", 
        flexDirection:"column",
        width: "100%",
        justifyContent:"center",
        alignItems:"center"
        //border:"1px solid black"
      }}
    >
      <Typography variant="h5">Pick Date</Typography>

      <DatePicker 
        getSelectedDay={handleDateChange}
        color={"#57BFC6"}
      />

      {isLoading && <CircularProgress />}

      {error &&  <Typography>Sorry something went wrong! please try again</Typography>}

      {!isLoading && !error && allOptions.length === 0 
      ? <Typography>No matches from search!! please type something else</Typography> // make this look better later
      : 
      timeInputs
    }
      
    </Box>
  );

  return content;
}
 
export default HaircutDatetime;