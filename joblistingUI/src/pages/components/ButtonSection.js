import { Alert, Box, Button, Snackbar, Stack } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";
import { useState } from "react";


const ButtonSection = () => {

    const { setPage, disablePrev, canSubmit, data } = useFormContext();
    const [successToast, setSuccessToast] = useState(false);

    const handlePrev = () => {
        setPage(prev => prev - 1)
    }
    
    const handleClose = () => {
        setSuccessToast(false);
    };

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
        setSuccessToast(true)
    }

    const content = (
        <Box paddingX={"20px"} marginY={"40px"} width={{xs:"100%", md: "50%"}} >
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Button
                    sx={{ width: "20%", backgroundColor: "#E39C9C" }}
                    variant="contained"
                    type="button"
                    onClick={handlePrev}
                    disabled={disablePrev}
                >
                    Go Back
                </Button>
            

                <Button
                    sx={{ width: "20%", display: !canSubmit ? "none" : "block" }}
                    variant="contained"
                    type="submit"
                    disabled={!canSubmit}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Stack>
            
            
            <Snackbar open={successToast} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: 'auto' }}>
                    Booking successful! See you soon
                </Alert>
            </Snackbar>
        </Box>           
    )
    return content;
}
 
export default ButtonSection;