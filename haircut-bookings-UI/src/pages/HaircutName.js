import useFormContext from "../customhooks/useFormContext";
import { NameField } from "./customstyles/CustomField.styles";

const HaircutName = () => {
  const { form, handleChange } = useFormContext();

  return (
    <NameField
      type="string"
      helperText="Please enter first name"
      id="haircutBookingName"
      name="haircutBookingName"
      label="Booking Name"
      variant="outlined"
      onChange={handleChange}
      value={form.haircutBookingName}
    />    
  );
}
 
export default HaircutName;