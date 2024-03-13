import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages"
import ErrorPage from "./pages/ErrorPage";
import { FormProvider } from "./context/FormContext";
import HaircutForm from "./pages/HaircutForm";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

//to handle the font changes I will give in and create a theme
let theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: [
        "Montserrat", 
        "sans-serif"
      ].join(",")
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides:{
        root: {
          color: "antiquewhite",
          "&.Mui-focused": {
            color:"#faa749"
          }
        }
      }
    }
  }
})

//to make fonts auto responsive
theme = responsiveFontSizes(theme);

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookHaircut" element={
          <FormProvider>
            <ThemeProvider theme={theme}>  
              <HaircutForm />
            </ThemeProvider>
          </FormProvider> 
        } />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
