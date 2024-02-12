import { Box, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const { page } = useFormContext();

  //const [searchQuery, setSearchQuery] = useState();

  const styles = {
    searchbar: {
      display: page > 0 ? "none": "block",
      position:"sticky", 
      top: "63px", 
      alignSelf: "flex-start", 
      width: {xs:"100%", md: "50%"},
      mb: "20px",
      //padding: "20px",
      backgroundColor: "lightcoral", 
      borderRadius: "10px"
      //marginX: "3px", //prob will not agree with me for responsiveness later
      //border: "1px solid grey" 
    },
    newSearchTest: {
      display: page > 0 ? "none": "block",
      position:"sticky", 
      top: "40px", 
      alignSelf: "flex-start",
      // border: "1px solid #ccc",
      //outline: "none",
      backgroundSize: "22px",
      //backgroundPosition: "13px",
      // borderRadius: "10px",
      width: "30px",
      height: "30px",
      padding: "25px",
      transition: "all 0.5s",
      backgroundColor:"white",

      "&:hover": {
        width: "300px",
        paddingLeft: "50px"
      }
   }
  }


  const content = (
    // <Box sx={styles.searchbar}>
    //   <SearchIcon />
    //   Search bar will be here
    // </Box>

    //FROM CSS DEMO
    //the styling is split into these controls
    // Box: .search-container
    // Input: (Textfield in my case??) .searchleft
    // label: .button AND .searchbutton
    // span (Icon): .mglass


    <TextField
      sx={styles.newSearchTest}
      id="input-with-icon-textfield"
      //label="TextField"
      InputProps={{
      startAdornment: (
        <InputAdornment position="start">
        <SearchIcon />
        </InputAdornment>
      ),
      }}
      variant="standard"
    />
  )
  return content;
}
 
export default SearchBar;