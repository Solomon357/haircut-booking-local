import { TextField } from "@mui/material";
import useFormContext from "../customhooks/useFormContext";


const HaircutName = () => {

    const { data, handleChange } = useFormContext();

    const content = (
        <TextField
        type="string"
        sx={{ width: "50%", margin: "2%" }}
        required
        id="haircutBookingName"
        name="haircutBookingName"
        label="Booking Name"
        variant="outlined"
        onChange={handleChange}
        value={data.haircutBookingName}
        />
    );

    return content;
}
 
export default HaircutName;