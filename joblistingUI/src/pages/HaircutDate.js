import useFormContext from "../customhooks/useFormContext";
import { Box, TextField } from "@mui/material";

const HaircutDate = () => {
    const { data, handleChange, currentDate } = useFormContext();

    const styles = {
        //date and time boxes will have different styles eventually
        datetime: {
            width: "50%", 
            margin: "2% auto"
        }
    }

    const content = (
        
        // i willlook into different designs for mui calender
        <Box>
            <TextField
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
            />

            {/* Im going to make a custom radio group with each button being a time value*/}
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
            />
        </Box>
    );

    return content;
}
 
export default HaircutDate;