import { Box, IconButton, Input, InputLabel, TextField, Typography } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const { page } = useFormContext();

  const [searchQuery, setSearchQuery] = useState();


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
      fullWidth
      id="search-bar"
      sx={styles.searchbar}
      onInput={(e) => {
        setSearchQuery(e.target.value)
      }}
      //label="Enter a type of Haircut"
      variant="outlined"
      placeholder="Search..."
      
    >
    </TextField>
  )
  return content;
}
 
export default SearchBar;