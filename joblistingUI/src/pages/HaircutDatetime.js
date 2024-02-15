import useFormContext from "../customhooks/useFormContext";
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import DatePicker from "react-horizontal-datepicker";
import "./customstyles/DatePicker.css"
import { HaircutControlLabel } from "./customstyles/HaitcutTypeRadio.styles";
import { ReactComponent as CheckedIcon } from "../images/filled_checked_icon.svg"
const HaircutDate = () => {
    const { data, handleChange, currentDate } = useFormContext();
    // both Date and Time are strings,
    // so especially for time i can assign radio buttons to have all the times available
    const styles = {
        //date and time boxes will have different styles eventually
        datetime: {
            width: "50%", 
            margin: "2% auto"
        }
    }

    //i will decide wether to store timeOptions as an array of values of objects later (wo;; most likey be stored as values though)

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


    const onSelectedDay = (d) => {
        let isoDate = d.toISOString()
        isoDate = isoDate.substring(0, isoDate.indexOf('T'))
        console.log(isoDate);
        console.log(typeof isoDate)
    };

    //for my time radio btns i could have it in a structure like

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
            {/* <TextField
                sx={styles.datetime}
                variant="outlined"
                type="date"
                id="bookingDate"
                name="bookingDate"
                InputProps={{inputProps: { min: currentDate} }}
                //required
                //multiline
                
                value={data.bookingDate}
                onChange={handleChange}
            /> */}

            {/* Potential bug that causes page refresh on button click??? */}
            <Typography variant="h5">Pick Date</Typography>
            <DatePicker 
                getSelectedDay={onSelectedDay}
                color={"#57BFC6"}
            />

            {/* Im going to make a custom radio group with each button being a time value*/}

            <FormControl sx={{width: "80%"}}>
                <FormLabel id="time-radiogroup-label">Pick Time Slot</FormLabel>
                <RadioGroup
                    aria-labelledby="time-radiogroup-label"
                    value= {timeOptions.timeValue}
                    name="timeOptions"
                >
                {timeOptions.map(({ timeValue }, index) => {
                    //let haircutArr = haircutValue.split(","); 
                    console.log(timeValue)
                    return(
                        <HaircutControlLabel
                        labelPlacement="start"
                        key={timeValue+index} 
                        //checked={data.bookingTime === timeValue} 
                        value={timeValue} 
                        control={<Radio checkedIcon={<CheckedIcon fill="#57BFC6" width={"25px"}/>} />}  
                        label= {timeValue} 
                        />
                    )
                })}

                </RadioGroup>
            </FormControl>
            

            {/* <Typography variant="h5">Pick Time Slot</Typography>
            <TextField
                sx={styles.datetime}
                variant="outlined"
                type="time"
                id="bookingTime"
                name="bookingTime"
                InputProps={{inputProps : {step: 300 } }}
                //multiline
                //rows={4}
                value={data.bookingTime}
                onChange={handleChange}
            /> */}
        </Box>

// {timeOptions.map(({ timeValue }, index) => {
//     //let haircutArr = haircutValue.split(","); 

//     return(
//         <FormControlLabel
//         labelPlacement="start"
//         key={timeValue+index} 
//         //checked={data.bookingTime === timeValue} 
//         value={timeValue} 
//         control={<Radio />} 
//         label= {{timeValue}} 
//         />
//     )
//     })}
    );

    return content;
}
 
export default HaircutDate;