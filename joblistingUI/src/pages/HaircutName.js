import { TextField } from "@mui/material";
import useFormContext from "../customhooks/useFormContext";


const HaircutName = () => {

    const { data, handleChange } = useFormContext()


    return ( 
        <TextField
        type="string"
        sx={{ width: "50%", margin: "2% auto" }}
        required
        id="haircutBookingName"
        name="haircutBookingName"
        label="Booking Name"
        variant="outlined"
        onChange={handleChange}
        value={data.haircutBookingName}
        />
     );
}
 
export default HaircutName;