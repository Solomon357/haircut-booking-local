import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography, useRadioGroup } from "@mui/material";
import { styled } from '@mui/material/styles';
import useFormContext from "../customhooks/useFormContext";
import { ReactComponent as CheckedIcon } from "../images/filled_checked_icon.svg"
//custom designs go here, once its working i might shift 
//code to a seperate component and import it here to keep things organised

//Custom default radio style
//for not deleted, refer back to mui if i change my mind



// Custom label
const StyledFormControlLabel = styled((props) => 
  (<FormControlLabel

    // default label style
    sx={{
      //position: "relative",
      color: "black",
      border: "4px solid #444343", 
      borderRadius: '15px',
      width:"90%",
      height: "90px",
      padding: '5px 5px',
      margin: "5px",
      display: "flex",
      justifyContent:"space-between",
      typography: "Saira Condensed",

      // '&::after': {
      //   content: '""',
      //   height: "20px",
      //   width: "20px",
      //   border: "2px solid #57BFC6",
      //   borderRadius: "50%",
      //   marginLeft: "auto",
      //   marginRight: "15px"
        
      // },
      
      "&:hover": {
        backgroundColor: "#e5e5e5"
        //add box shadow here once im more comfortable with design
      }
    }}
    {...props}
    />))
    (({ checked }) => ({

    //checked label style
    "&.MuiFormControlLabel-root": checked && {
      // Change text color and background here

      border: "4px solid #57BFC6",
      
      // "&::after": {
      //   height: '10px',
      //   width: '10px',
      //   border: '7px solid white',
      //   backgroundColor: '#57BFC6'
      // }
      
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
//         // icon={<CustomIcon />}
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
      },
      {
        haircutValue: "Student Discount,30mins-45mins,10"
      },
      {
        haircutValue: "Hair Wash,15mins,10"
      },
      {
        haircutValue: "haircutName6,30mins-45mins,12"
      },
      {
        haircutValue: "haircutName7,30mins,7"
      },
      {
        haircutValue: "haircutName8,30mins,7"
      },
      {
        haircutValue: "haircutName9,30mins-45mins,10"
      },
      {
        haircutValue: "haircutName10,15mins,10"
      },
      {
        haircutValue: "haircutName11,30mins-45mins,12"
      },
      {
        haircutValue: "haircutName12,30mins,7"
      },
      {
        haircutValue: "haircutName13,30mins,7"
      },
      {
        haircutValue: "haircutName14,30mins-45mins,10"
      },
      {
        haircutValue: "haircutName15,15mins,10"
      },
      {
        haircutValue: "haircutName16,30mins-45mins,12"
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
    <Box 
      sx={{
        display:"flex", 
        flexDirection:"column", 
        justifyContent:"center", 
        alignItems:"center" 
      }}
    >

      <Box
        marginX={"3px"} //prob will not agree with me for responsiveness later
        //border={"1px solid grey"} 
        mb={"20px"}
        width={{xs:"100%", md: "50%"}}
        position={"sticky"}
        top={"63px"} 
        alignSelf={"flex-start"}
        sx={{ backgroundColor: "lightcoral" }}
      >
        Search bar will be here
      </Box>

      <FormControl 
        sx={{
          border: "1px solid black", 
          width:"90%"
        }}
      >
        
        <FormLabel id="haircut-radio-buttons">Haircut Options</FormLabel>
        
        <RadioGroup
          aria-labelledby="haircut-radio-buttons"
          name="haircutType"
          value ={haircutOptions.haircutValue} 
          onChange = {handleChange}
          //sx={{border: "1px solid black"}}
        >
          {haircutOptions.map(({ haircutValue }, index) => {
            let haircutArr = haircutValue.split(","); 

            return(
              <MyFormControlLabel
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
    </Box>
  )

  return content
}
 
export default HaircutType;