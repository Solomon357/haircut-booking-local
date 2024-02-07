//import { TextField } from "@mui/material";
import useFormContext from "../customhooks/useFormContext";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState } from "react";
//import moment from "moment";
import dayjs from "dayjs";
import { Box, TextField } from "@mui/material";
const HaircutDate = () => {
    const { data, handleChange, currentDate } = useFormContext();

    const content = (
        
        // i will change this so especially select time will be
        // in checkbox form
        <Box>
            <TextField
            sx={{ width: "50%", margin: "2% auto" }}
            variant="outlined"
            type="date"
            id="bookingDate"
            name="bookingDate"
            InputProps={{inputProps: { min: currentDate} }}
            //required
            //multiline
            
            value={data.bookingDate}
            onChange={handleChange}
            //label="Job-desc"
            />

            {/* Im going to make a custom radio group with each button being a time value*/}
            <TextField
            sx={{ width: "50%", margin: "2% auto" }}
            variant="outlined"
            type="time"
            id="bookingTime"
            name="bookingTime"
            // InputProps={{inputProps: { min:"09:00", max: "17:30"} }}
            InputProps={{inputProps : {step: 300 } }}
            //required
            //multiline
            //rows={4}
            value={data.bookingTime}
            onChange={handleChange}
            //label="Job-desc"
            />
        </Box>
          


        // <Box>
        //     <LocalizationProvider dateAdapter={AdapterDayjs}>
        //         <Box>
        //             <DateCalendar
        //                 value={date}
        //                 onChange={(newDate) => {
        //                     setDate(newDate)
        //                     console.log(newDate.format('YYYY-MM-DD'))
        //                     data.bookingDate = newDate.format('YYYY-MM-DD')
        //                 }}
        //                 disablePast
        //             />
        //         </Box>

        //         <Box>
        //             <TimePicker 
        //                 label="Basic time picker" 
        //                 name="bookingTime" 
        //                 format="HH:mm"
        //                 ampm={false}
        //                 // minTime={date.set("hour", 8)} 
        //                 // maxTime={date.set("hour", 16)} 
        //                 timeSteps={{ minutes: 30 }} 
        //                 value={time} 
        //                 onChange={handleTimeChange}
        //             />

        //         </Box>
        //     </LocalizationProvider>

        // </Box>
    );

    return content;
}
 
export default HaircutDate;