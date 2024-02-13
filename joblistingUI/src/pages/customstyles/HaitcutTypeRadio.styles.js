import styled from "@emotion/styled";
import { FormControlLabel, useRadioGroup } from "@mui/material";

const styles = {
    //make responsive later
    customformlabel: {
        //position: "relative",
        color: "black",
        border: "2px solid #444343", 
        borderRadius: '15px',
        width:"96%",
        height: "90px",
        padding: '5px 5px',
        margin: "5px",
        display: "flex",
        justifyContent:"space-between",
        typography: "Saira Condensed",
       // backgroundColor: "white",
        
        "&:hover": {
            backgroundColor: "#e5e5e5",
            //boxShadow: "5px 5px 10px #a9f5fb"
            //add box shadow here once im more comfortable with design
        }
    }
}

// Custom label, could be in its own styles componenet
const StyledFormControlLabel = styled((props) => 
  (<FormControlLabel sx={styles.customformlabel} {...props} />
  ))(({ checked }) => ({

    //checked label style
    "&.MuiFormControlLabel-root": checked && {
      // Change text color and background here
      border: "3px solid #57BFC6", 
    }
  })
);

// Custom FormControl
export function HaircutControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}