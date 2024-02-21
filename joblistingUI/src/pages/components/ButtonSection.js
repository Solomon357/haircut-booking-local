import { Box } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";
import { PrevButton } from "../customstyles/Button.styles";


const ButtonSection = () => {

  const { setPage, disablePrev, canSubmit } = useFormContext();
  //const [successToast, setSuccessToast] = useState(false);

  const styles = {
    buttonbox: {
      paddingX:"20px", 
      marginY:"40px", 
      width: {xs:"100%", md: "50%"}
    },
    goback: {
      width: "20%", 
      alignSelf: "flex-start"
    },
    submit: {
      display: !canSubmit ? "none" : "block",
      width: "20%"
    }

  }

  const handlePrev = () => {
    setPage(prev => prev - 1)
  }

  const content = (
    <Box sx={styles.buttonbox}>
      <PrevButton
        sx={styles.goback}
        variant="contained"
        type="button"
        onClick={handlePrev}
        disabled={disablePrev}
      >
        Go Back
      </PrevButton>
    </Box>           
  )
  
  return content;
}
 
export default ButtonSection;