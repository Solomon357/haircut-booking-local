import { AppBar, Container, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { ReactComponent as SciccorIcon } from "../../images/sciccor_icon.svg" 
import HomeIcon from '@mui/icons-material/Home';
import useFormContext from "../../customhooks/useFormContext";
import { useMemo } from "react";

const HeaderBar = () => {
  const { page, title } = useFormContext();
  
  return useMemo(()=> {
    const styles = {
      appbar: {
        position: "sticky",
        top: "0", 
        backgroundColor: "#231f20"
      },

      headertitle : {
        fontWeight: "bold",
        letterSpacing: { xs: '0.1rem', sm: '0.2rem' },
        fontSize: { xs: '1rem', sm: '1.8rem' },
      },
      brandtitle : {
        // letterSpacing: { xs: '0.1rem', sm: '0.2rem' },
        marginLeft: "10px",
        fontSize: { xs: '0.8rem', sm: '1.4rem' },
      }
    }

    const content = (
      <AppBar 
        elevation={2} // later i will adjust to elevate once position is sticky
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
              
              <SciccorIcon height={"40px"} width={"40px"}/>

              <Typography
                variant='h6' 
                sx={styles.brandtitle}
              >
              BARBER SHOP
              </Typography>
            </Stack> 

            <Typography 
              variant='h3' 
              sx={styles.headertitle}>
                {title[page]}
              </Typography>

            <IconButton href='/' size='large' sx={{color: '#faa749'}}>
              <HomeIcon />
            </IconButton>  

          </Toolbar>
        </Container>
      </AppBar>
    )

    return content;

  }, [page, title])
}
 
export default HeaderBar;