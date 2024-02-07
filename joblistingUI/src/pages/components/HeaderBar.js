import { AppBar, Container, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { ReactComponent as HaircutIcon } from "../../images/haircut_icon.svg" 
import HomeIcon from '@mui/icons-material/Home';
import useFormContext from "../../customhooks/useFormContext";

const HeaderBar = () => {

    const { title, page } = useFormContext();

    const content = (
        <AppBar 
            elevation={0} // later i will adjust to elevate once position is sticky
            className='header-content'
            component={"header"} 
            sx={{ 
            //border: "1px solid black",
            //paddingY: "30px",
            position: "sticky",
            top: "0", 
            backgroundColor: "#57bfc6", 
            //background: "linear-gradient(0deg, #ffffff 10%, #57bfc6 40%, #57bfc6 100%)",
            //backgroundColor: "red"
            }}
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
                    sx={{
                        mr: 2,
                        fontWeight: 700,
                        letterSpacing: { xs: '0.1rem', sm: '0.2rem' },
                        fontSize: { xs: '1rem', sm: '1.2rem' },
                    }}
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