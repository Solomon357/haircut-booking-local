import { Box, Step, StepLabel, Stepper } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";
import { useMemo } from "react";

const FormProgress = () => {
  const { page, title } = useFormContext();

  //useMemo so that progress bar will only re-render once 
  //page or title dependecies are changed
  return useMemo(() => {
    const styles = {
      stepper: {
        minWidth: '100%', 
        marginTop: "20px"
      }
    }

    const content = (
      <Box sx={styles.stepper}>
        <Stepper activeStep={page} alternativeLabel>
          {Object.keys(title).map((label) => (
            <Step key={label+1}>
              <StepLabel>{title[label]}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    )

    return content 
  },[page, title])
}
  
export default FormProgress;