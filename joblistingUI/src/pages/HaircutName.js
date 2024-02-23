import { TextField } from "@mui/material";
import useFormContext from "../customhooks/useFormContext";


const HaircutName = () => {
  const { form, handleChange } = useFormContext();

  const styles = {
    namefield : {
      width: "50%", 
      margin: "2%",
    }
  };

  const content = (
    <TextField
      type="string"
      sx={styles.namefield}
      required
      id="haircutBookingName"
      name="haircutBookingName"
      label="Booking Name"
      variant="outlined"
      onChange={handleChange}
      value={form.haircutBookingName}
      inputProps={{style: {textTransform: 'capitalize'}}}
    />
  );

  return content;
}
 
export default HaircutName;