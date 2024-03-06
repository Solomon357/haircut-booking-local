import useFormContext from "../customhooks/useFormContext";
import { NameField } from "./customstyles/CustomField.styles";

const HaircutName = () => {
  const { form, handleChange } = useFormContext();

  const content = (
    <NameField
      type="string"
      sx={{ width: "50%", margin: "2%" }}
      helperText="Please enter your name"
      id="haircutBookingName"
      name="haircutBookingName"
      label="Booking Name"
      variant="outlined"
      onChange={handleChange}
      value={form.haircutBookingName}
    />
  );

  return content;
}
 
export default HaircutName;