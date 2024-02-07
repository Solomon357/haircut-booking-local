import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import useFormContext from "../customhooks/useFormContext";


const HaircutBarber = () => {
    const { data, handleChange } = useFormContext();

    const barberOptions = [
        {
          barberValue: "Jeff,Apprentice,0" 
        },
        {
          barberValue: "Jonny,Mid-level,3"
        },
        {
          barberValue: "Taylor,Expert,5"
        }
    ];


    const content = (
      <Box sx={{ margin:"1% auto"}}>
        <FormControl>
            
          <FormLabel id="barber-radio-buttons">Barber Options</FormLabel>
          <RadioGroup
            name="barberInfo"
            value ={barberOptions.barberValue} 
            onChange = {handleChange}
          >
            {barberOptions.map(({ barberValue }, index) => {
              let barberArr = barberValue.split(","); 

              return(
                <FormControlLabel key={barberValue+index} checked={data.barberInfo === barberValue} value={barberValue} control={<Radio />} label ={barberArr[0] + " - " + barberArr[1] + " (£"+ (data.haircutPrice + (+barberArr[2]))+ ")" } />
              )
            })}
          </RadioGroup>
        </FormControl>
      </Box>
    )
    return content;
}
 
export default HaircutBarber;