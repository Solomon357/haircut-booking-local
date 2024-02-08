import { Box, Step, StepLabel, Stepper } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";


const FormProgress = () => {
  const { page, title } = useFormContext();

  const styles = {
    stepper: {
      width: '100%', 
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
}
  
export default FormProgress;