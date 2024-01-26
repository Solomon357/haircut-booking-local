import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, useRadioGroup } from "@mui/material";
import { styled } from '@mui/material/styles';
import useFormContext from "../customhooks/useFormContext";
//custom designs go here, once its working i might shift 
//code to a seperate component and import it here to keep things organised

//Custom default radio style
//for not deleted, refer back to mui if i change my mind


// Custom label
const StyledFormControlLabel = styled((props) => 
  (<FormControlLabel

    // default label style
    sx={{
      position: "relative",
      color: "black",
      border: "2px solid #E8E7E7", 
      borderRadius: '5px',
      padding: '10px 5px',
      margin: "2px",
      display: "flex",
      alignItems: "center",

      '&::after': {
        content: '""',
        height: "20px",
        width: "20px",
        border: "2px solid #57BFC6",
        borderRadius: "50%",
        marginLeft: "auto",
        marginRight: "15px"
          
      },
      
      "&:hover": {
        border: "2px solid #57BFC6"
        //add box shadow here once im more comfortable with design
      }
    }}
    {...props}
    />))
    (({ checked }) => ({

    //checked label style
    "&.MuiFormControlLabel-root": checked && {
      // Change text color and background here
      color: "white",
      backgroundColor: "#57BFC6",
      
      "&::after": {
        height: '10px',
        width: '10px',
        border: '7px solid white',
        backgroundColor: '#57BFC6'
      }
    }
  })
);

// Custom FormControl
function MyFormControlLabel(props) {
  // MUI UseRadio Group
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

// returning custom radio all together
// function CustomRadio(props) {
//     return (
//         <Radio
//         disableRipple
//         color="default"
//         checkedIcon={<CustomCheckedIcon />}
//         icon={<CustomIcon />}
//         {...props}
//         />
//     );
// }



const HaircutType = () => {

  const { data, handleChange } = useFormContext()

  const haircutOptions = [
      {
        haircutValue: "Skin Fade,30mins-45mins,12"
      },
      {
        haircutValue: "Grade 1 all over,30mins,7"
      },
      {
        haircutValue: "Beard Trim,30mins,7"
      }
  ];

  return ( 
    <Box sx={{ margin:"1% auto"}}>

      <Box border={"1px solid grey"} mb={"20px"}>Search bar will be here</Box>

      <FormControl>
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
              <MyFormControlLabel
              
              key={haircutValue+index} 
              checked={data.haircutType === haircutValue} 
              value={haircutValue} 
              control={<Radio sx={{display: "none"}} />} 
              label= {
              <Box>
                <Box>{haircutArr[0]}</Box>
                <Box sx={{color: '#d3d3d3'}}>{haircutArr[1]}</Box>
                <Box>from £{haircutArr[2]}</Box>
              </Box>
              } 
              />
            )  
          })}

        </RadioGroup>
      </FormControl>

        

      {/* <ul>
        {haircutOptions.map(({ haircutValue }, index) => {
          //convert string option to string array so we can use separate words
          let haircutArr = haircutValue.split(",");
          //data.haircutType = haircutValue;
          
          return (
            <li key={index}>
              <div>
                <div>
                  <input
                    type="radio"
                    id={`haircut-radio-${index}`}
                    name="haircutType"
                    value={haircutValue} // i believe this is the right call, i just need to adapt how i pull data from options object.
                    checked={data.haircutType === haircutValue} // once checked assign the data to the global scope
                    onChange={handleChange}
                  />
                  <label htmlFor={`haircut-radio-${index}`}>{haircutArr[0] + " from £" + haircutArr[2]}</label>
                </div>
              </div>
            </li>
          );
        })}
      </ul> */}
    </Box>
  );
}
 
export default HaircutType;