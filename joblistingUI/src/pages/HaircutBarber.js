import { Avatar, CircularProgress, FormControl, FormLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import useFormContext from "../customhooks/useFormContext";
import { BarberControlLabel } from "./customstyles/BarbarInfoRadio.styles";
import { useFetch } from "../customhooks/useFetch";

const HaircutBarber = () => {

  const { form, handleChange } = useFormContext();
  const { allOptions, isLoading, error } = useFetch(`http://localhost:8080/allBarberInfo`);

  const barberInputs = (
  
    <FormControl sx={{ width:"100%" }}>
        
      <FormLabel id="barber-radio-buttons">Barber Options</FormLabel>

      <RadioGroup
        row
        name= "barberInfo"
        value= {allOptions.barber} 
        onChange= {handleChange}
      >
        {allOptions.map((barberDetails) => {
          let barberArr = barberDetails.barber.split(","); 

          return(
            <BarberControlLabel 
              labelPlacement="bottom"
              key={barberDetails.id} 
              checked={form.barberInfo === barberDetails.barber} 
              value={barberDetails.barber} 
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

  const content = (
    <>
      {isLoading && <CircularProgress />}

      {error &&  <Typography>Sorry something went wrong! please try again</Typography>}

      {!isLoading && !error && allOptions.length === 0 
        ? <Typography>No matches from search!! please type something else</Typography> // make this look better later
        : 
        barberInputs
      }
    </>
  )
  return content;
}
 
export default HaircutBarber;