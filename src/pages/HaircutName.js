import useFormContext from "../customhooks/useFormContext";
import { NameField } from "./customstyles/CustomField.styles";

const HaircutName = () => {
  const { form, handleChange, handleNext } = useFormContext();

  const handleKeyUp = (e) => {
    if (e.key === "Enter"){
      handleNext();
    }
  }

  return (
    <NameField
      type="string"
      helperText="Please enter first name"
      id="haircutBookingName"
      name="haircutBookingName"
      label="Booking Name"
      variant="outlined"
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      value={form.haircutBookingName}
    />    
  );
}
 
export default HaircutName;