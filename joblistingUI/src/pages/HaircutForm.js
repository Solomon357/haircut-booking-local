import { Box } from '@mui/material';
import FormInputs from './FormInputs';
import FormProgress from './components/FormProgress';
import HeaderBar from './components/HeaderBar';
import Footer from './components/Footer';
import ButtonSection from './components/ButtonSection';
import CartBox from './components/CartBox';

const HaircutForm = () => {
  const styles = {
    pagebody: {
      position: "relative",
      minHeight: "100vh",
    },
    main: {
      minWidth: "100%",
      paddingBottom: "5rem", // has to be more than footer height
    },
    forminputs: {
      width: {xs:"100%", md: "50%"},
      minHeight: "35vh", // maybe tweek i dunno yet??
      display:"flex", 
      flexDirection:"column", 
      justifyContent:"center", 
      alignItems:"center" 
    }
  }

  const content = (
    <Box className='page-body' sx={styles.pagebody} >

      <HeaderBar />
    
      <Box className='form-content' component={"main"} sx={styles.main}>

        <FormProgress />

        <form>
          <Box sx={styles.forminputs}>
            <FormInputs />
          </Box>
 
          <CartBox />

          <ButtonSection />  
        </form>
      </Box>

      <Footer />
    </Box>
  );

  return content;
}

export default HaircutForm;