import { Box, Container, Stack, Toolbar, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {

    //styles will go here...



    const content = (
        <Box 
            sx={{ 
            position: "absolute",
            bottom: "0",
            width: "100%",
            backgroundColor: "#57bfc6", 
            }} 
            component={"footer"}
        > 
            <Container>
                <Toolbar sx={{ justifyContent: "space-between", color:"white"}}>

                    <Stack spacing={1} direction={"row"}>
                    <EmailIcon />
                    <Typography>Solomonoddy@hotmail.com</Typography>
                    </Stack>

                    <Stack spacing={"20px"} direction={"row"}>
                    <Typography>Terms & Conditions</Typography>
                    <Typography>Privacy Policy</Typography>
                    </Stack>

                </Toolbar>
            </Container>
        </Box>
    )


    return content;
}
 
export default Footer;