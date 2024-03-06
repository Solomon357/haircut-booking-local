import { Box, Step, StepLabel, Stepper } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";
import { useMemo } from "react";

const FormProgress = () => {
  const { page, title } = useFormContext();

  //useMemo so that progress bar will only re-render once 
  //page or title dependecies are changed
  return useMemo(() => {
    const styles = {
      steppercontainer: {
        minWidth: '100%', 
        marginY: "20px"
      },
      stepicon: {

        '& .MuiStepLabel-label':{
          color: "antiquewhite",
          
          '&.Mui-active':{
            color: '#faa749'
          },
          '&.Mui-completed':{
            color: '#faa749'
          }
        },
        '& .MuiSvgIcon-root': {
          '&.Mui-active':{
            color: '#faa749'
          },
          '&.Mui-completed':{
            color: '#faa749'
          },
          
        }
      }
    }

    const content = (
      <Box sx={styles.steppercontainer}>
        <Stepper activeStep={page} alternativeLabel sx={styles.stepicon}>
          {Object.keys(title).map((label) => (
            <Step 
              key={label+1} 
              >
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