import { Box, Container, Stack, Toolbar, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const styles = {
    footer: {
      position: "absolute",
      bottom: "0",
      width: "100%",
      backgroundColor: "#57bfc6"
    },
    toolbar: {
      justifyContent: "space-between",
      color:"white"
    }
  }

  const content = (
    <Box 
      sx={styles.footer} 
      component={"footer"}
    > 
      <Container>
        <Toolbar sx={styles.toolbar}>

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