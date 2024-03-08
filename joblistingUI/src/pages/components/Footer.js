import { IconButton, Link, Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const styles = {
    footer: {
      display:"flex",
      position: "absolute", 
      bottom: "20px",
      justifyContent:"space-around",
      width:"100%",
      alignItems:"center",
    },
    toolbar: {
      justifyContent: "space-between",
      color:"white"
    }
  }

  const content = (
    <Stack component="footer" direction={"row"} sx={styles.footer} flexWrap={"wrap"}>
      
      <Stack direction={"row"} alignItems={"center"}>
        <IconButton href="mailto:solomonoddy@hotmail.com">
          <EmailIcon htmlColor="antiquewhite"/>
        </IconButton>

        <Link href="mailto:solomonoddy@hotmail.com">
          <Typography color={"antiquewhite"}>Solomonoddy@hotmail.com</Typography>
        </Link>
      </Stack>
    
      <Stack spacing={"20px"} direction={"row"}>
        <Typography>Terms & Conditions</Typography>

        <Typography>Privacy Policy</Typography>
      </Stack>
    </Stack>
  )

  return content;
}
 
export default Footer;