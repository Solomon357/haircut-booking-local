import { Box } from '@mui/material';
import FormInputs from './FormInputs';
import FormProgress from './components/FormProgress';
import SearchBar from './components/SearchBar';
import HeaderBar from './components/HeaderBar';
import CheckoutBox from './components/CheckoutBox';
import Footer from './components/Footer';
import ButtonSection from './components/ButtonSection';



const HaircutForm = () => {

  //styles will go here...



  const content = (
    <Box
      // component={"main"}
      className='page-body'
      sx={{
        position: "relative",
        minHeight: "100vh"
      }} 
    >

      <HeaderBar />
    
      <Box 
        className='form-content'
        component={"main"}
        sx={{
          //minHeight: "100%",
          paddingBottom: "7rem", // has to be more than footer height
          //paddingTop: "0.1rem",
          border:"1px solid black"
        }}
      >
        <FormProgress />

        <form>
          <Box  
            sx={{ 
              margin: "1%", 
              width: {xs:"100%", md: "50%"},
              //border: "1px solid black",
              minHeight: "35vh",
              display:"flex", 
              flexDirection:"column", 
              justifyContent:"center", 
              alignItems:"center" 
            }}
          >
            <SearchBar />
            <FormInputs />
          </Box>
 
          <CheckoutBox />

          <ButtonSection />  
        </form>
      </Box>

      <Footer />
    </Box>
  );

  return content;
}

export default HaircutForm;