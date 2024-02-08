import { AppBar, Container, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { ReactComponent as HaircutIcon } from "../../images/haircut_icon.svg" 
import HomeIcon from '@mui/icons-material/Home';
import useFormContext from "../../customhooks/useFormContext";

const HeaderBar = () => {

    const { title, page } = useFormContext();

    const styles = {
        appbar: {
            //border: "1px solid black",
            position: "sticky",
            top: "0", 
            backgroundColor: "#57bfc6"
        },

        headertitle : {
            mr: 2,
            fontWeight: 700,
            letterSpacing: { xs: '0.1rem', sm: '0.2rem' },
            fontSize: { xs: '1rem', sm: '1.2rem' },
        }
    }

    const content = (
        <AppBar 
            elevation={0} // later i will adjust to elevate once position is sticky
            className='header-content'
            component={"header"} 
            sx={styles.appbar}
        >
            <Container sx={{ marginLeft: {xs: "0px", md: "75px"} }} >
                <Toolbar
                disableGutters
                sx={{justifyContent:"space-between"}}
                >
                <Stack direction="row" alignItems={"center"} >
                    <HaircutIcon />
                    <Typography
                    variant='h6' 
                    align='center'
                    sx={styles.headertitle}
                    >
                    CompanyTitle
                    </Typography>
                </Stack> 
        
                <Typography variant='h3' align='center'>{title[page]}</Typography>
        
                <IconButton href='/' size='large' sx={{color: 'white'}}>
                    <HomeIcon />
                </IconButton>  
        
                </Toolbar>
            </Container>
        </AppBar>
    )
    return content;
}
 
export default HeaderBar;