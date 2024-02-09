import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const FormTestPage4 = () => {

    // const { data, handleChange } = useFormContext()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <div>
          {matches ? (
            <Box 
                sx={{ 
                    backgroundColor: "green",
                    height: "400px"
                }}
            >
                "XS in my project"
            </Box>
          ) : (
            <Box 
                sx={{ 
                    backgroundColor: "red", 
                    position: "absolute",
                    bottom: "0",
                    right:"0",
                    left:"0"
                }}
            >
                "MD and up"
            </Box>
          )}
        </div>
    );
 }
  
 export default FormTestPage4;