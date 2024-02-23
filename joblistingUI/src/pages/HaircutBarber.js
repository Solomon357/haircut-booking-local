import { Avatar, FormControl, FormLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import useFormContext from "../customhooks/useFormContext";
import { BarberControlLabel } from "./customstyles/BarbarInfoRadio.styles";

const HaircutBarber = () => {
  const { form, handleChange } = useFormContext();

  const barberOptions = [
    {
      barberValue: "Jeff (Apprentice),Apprentice,0,J" 
    },
    {
      barberValue: "Jonny,Mid-level barber,3,J"
    },
    {
      barberValue: "Taylor,Senior barber,5,T"
    }
  ];


  const content = (
    <FormControl sx={{ width:"100%" }}>
        
      <FormLabel id="barber-radio-buttons">Barber Options</FormLabel>

      <RadioGroup
        row
        name="barberInfo"
        value ={barberOptions.barberValue} 
        onChange = {handleChange}
      >
        {barberOptions.map(({ barberValue }, index) => {
          let barberArr = barberValue.split(","); 

          return(
            <BarberControlLabel 
              labelPlacement="bottom"
              key={barberValue+index} 
              checked={form.barberInfo === barberValue} 
              value={barberValue} 
              control={<Radio sx={{display: "none"}} />} 
              label={
                <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
                  <Avatar>{barberArr[3]}</Avatar>
                  <Typography>{barberArr[0]}</Typography>
                  <Typography sx={{color: '#898989'}}>{barberArr[1]}</Typography>
                  <Typography>£{(form.haircutPrice + (+barberArr[2]))}</Typography>
                </Stack>
              } 
            />
          )
        })}
      </RadioGroup>
    </FormControl>
  )
  return content;
}
 
export default HaircutBarber;