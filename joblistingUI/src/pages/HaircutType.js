import { FormControl, FormLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import useFormContext from "../customhooks/useFormContext";
import { ReactComponent as CheckedIcon } from "../images/filled_checked_icon.svg"
import { HaircutControlLabel } from "./customstyles/HaitcutTypeRadio.styles";

const HaircutType = () => {

  const { data, handleChange } = useFormContext()

  //haircut option will most likely be accessed in mongo to allow searching
  const haircutOptions = [
    {
      haircutValue: "Skin Fade,30-45mins,12"
    },
    {
      haircutValue: "Grade 1 all over,30mins,7"
    },
    {
      haircutValue: "Beard Trim,30mins,7"
    },
    {
      haircutValue: "Student Discount,30-45mins,10"
    },
    {
      haircutValue: "Hair Wash,15mins,10"
    },
    {
      haircutValue: "haircutName6,30-45mins,12"
    },
    {
      haircutValue: "haircutName7,30mins,7"
    },
    {
      haircutValue: "haircutName8,30mins,7"
    },
    {
      haircutValue: "haircutName9,30-45mins,10"
    },
    {
      haircutValue: "haircutName10,15mins,10"
    },
    {
      haircutValue: "haircutName11,30-45mins,12"
    },
    {
      haircutValue: "haircutName12,30mins,7"
    },
    {
      haircutValue: "haircutName13,30mins,7"
    },
    {
      haircutValue: "haircutName14,30-45mins,10"
    },
    {
      haircutValue: "haircutName15,15mins,10"
    },
    {
      haircutValue: "haircutName16,30-45mins,12"
    },
    {
      haircutValue: "haircutName17,30mins,7"
    },
    {
      haircutValue: "haircutName18,30mins,7"
    },
    {
      haircutValue: "haircutName19,30mins-45mins,10"
    },
    {
      haircutValue: "haircutName20,15mins,10"
    }
  ];

  const content = (
    <FormControl sx={{ width:"80%", zIndex:"0" }}>
      
      <FormLabel id="haircut-radio-buttons">Haircut Options</FormLabel>
      
      <RadioGroup
        aria-labelledby="haircut-radio-buttons"
        name="haircutType"
        value ={haircutOptions.haircutValue} 
        onChange = {handleChange}
      >
        {haircutOptions.map(({ haircutValue }, index) => {
          let haircutArr = haircutValue.split(","); 

          return(
            <HaircutControlLabel
              labelPlacement="start"
              key={haircutValue+index} 
              checked={data.haircutType === haircutValue} 
              value={haircutValue} 
              control={<Radio checkedIcon={<CheckedIcon fill="#57BFC6" width={"25px"}/>} />} 
              label= {
                <Stack direction={"column"}>
                  <Typography >{haircutArr[0]}</Typography>
                  <Typography sx={{color: '#898989'}}>{haircutArr[1]}</Typography>
                  <Typography>from £{haircutArr[2]}</Typography>
                </Stack>
              } 
            />
          )
        })}

      </RadioGroup>
    </FormControl>
  );

  return content;
}
 
export default HaircutType;