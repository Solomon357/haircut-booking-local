import { Box, Step, StepLabel, Stepper } from "@mui/material";
import useFormContext from "../customhooks/useFormContext";


const FormProgress = () => {
    const { page, title } = useFormContext();
  
    const percentage = 100 / Object.keys(title).length
  
    const progress = ((page + 1) * percentage).toFixed(2)
    
  //   const steps = Object.keys(title).map((step, i) => {
  //     return <div key = {i} className="barmarker">Step {i+1}</div>
  //   })
    const content = (
    <Box sx={{ width: '100%', marginTop: "20px" }}>
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