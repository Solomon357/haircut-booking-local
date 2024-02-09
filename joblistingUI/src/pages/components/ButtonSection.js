import { Alert, Box, Button, Snackbar, Stack } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";
import { useState } from "react";
import { PrevButton, SubmitButton } from "../customstyles/Button.styles";


const ButtonSection = () => {

    const { setPage, disablePrev, canSubmit, data } = useFormContext();
    const [successToast, setSuccessToast] = useState(false);

    const styles = {
        buttonbox: {
            paddingX:"20px", 
            marginY:"40px", 
            width: {xs:"100%", md: "50%"}
        },
        goback: {
            width: "20%", 
        },
        submit: {
            display: !canSubmit ? "none" : "block",
            width: "20%"
        }

    }

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
        <Box sx={styles.buttonbox}>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <PrevButton
                    sx={styles.goback}
                    variant="contained"
                    type="button"
                    onClick={handlePrev}
                    disabled={disablePrev}
                >
                    Go Back
                </PrevButton>
            

                <SubmitButton
                    sx={styles.submit}
                    variant="contained"
                    type="submit"
                    disabled={!canSubmit}
                    onClick={handleSubmit}
                >
                    Submit
                </SubmitButton>
            </Stack>
            
            
            <Snackbar open={successToast} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" variant="filled">
                    Booking successful! See you soon
                </Alert>
            </Snackbar>
        </Box>           
    )
    return content;
}
 
export default ButtonSection;