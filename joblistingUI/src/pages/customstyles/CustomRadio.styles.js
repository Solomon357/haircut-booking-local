import styled from "@emotion/styled";
import { FormControlLabel, useRadioGroup } from "@mui/material";

const styles = {
  //make responsive later
  customformlabel: {
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
    "&:hover": {
      backgroundColor: "#e5e5e5",
    }
  }
}

const StyledFormControlLabel = styled((props) => 
  (<FormControlLabel sx={styles.customformlabel} {...props} />
  ))(({ checked }) => ({
    //styles of the component can be played around with here
    "&.MuiFormControlLabel-root": checked && {
      border: "3px solid #57BFC6", 
    }
  })
);

export function CustomControlLabel(props) {
  const radioGroup = useRadioGroup();
  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}