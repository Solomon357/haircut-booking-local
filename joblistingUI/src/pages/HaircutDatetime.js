import useFormContext from "../customhooks/useFormContext";
import { Box, FormControl, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import DatePicker from "react-horizontal-datepicker";
import "./customstyles/DatePicker.css"
import { CustomControlLabel } from "./customstyles/CustomRadio.styles";
import { ReactComponent as CheckedIcon } from "../images/filled_checked_icon.svg"


const HaircutDatetime = () => {
  const { data, handleChange, handleDateChange } = useFormContext();

  //i will decide wether to store timeOptions as an array of values of objects later (woll most likey be stored as values though)

  const timeOptions = [
    {
      timeValue: "09:00"
    },
    {
      timeValue: "09:30"
    },
    {
      timeValue: "10:00"
    },
    {
      timeValue: "10:30"
    },
    {
      timeValue: "11:00"
    },
    {
      timeValue: "11:30"
    },
    {
      timeValue: "12:00"
    },
  ];
  //const timeOptions = ["09:00","09:30","10:00","10:30","11:00","11:30","12:00"]

  //for my time radio btns i could have it in a structure like:
  //{ time: 17:30, isbooked: false} or ["17:30", false]

  // where if checked it will change false to true and also once submitted
  // will change the value in mongodb to deal with availability

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

      {/* Potential bug that causes page refresh on button click??? */}
      <DatePicker 
        getSelectedDay={handleDateChange}
        color={"#57BFC6"}
      />

      <FormControl sx={{width: "80%"}}>
        <FormLabel id="time-radiogroup-label">Pick Time Slot</FormLabel>
        <RadioGroup
          aria-labelledby="time-radiogroup-label"
          value={timeOptions.timeValue}
          name="bookingTime"
          onChange={handleChange}
        >
          {timeOptions.map(({ timeValue }, index) => {
            return(
              <CustomControlLabel
                labelPlacement="start"
                key={timeValue+index} 
                checked={data.bookingTime === timeValue} 
                value={timeValue} 
                control={<Radio checkedIcon={<CheckedIcon fill="#57BFC6" width={"25px"}/>} />}  
                label= {timeValue} 
              />
            )
          })}
        </RadioGroup>
      </FormControl>
    </Box>
  );

  return content;
}
 
export default HaircutDatetime;