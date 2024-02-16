import { InputAdornment, TextField} from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";
//import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const { page } = useFormContext();

  //const [searchQuery, setSearchQuery] = useState();
  
  const styles = {
    searchcontainer: {
      display: page > 0 ? "none": "block",
      position:"sticky", 
      top: "64px", 
      alignSelf: "flex-start",
      marginLeft: "2px",
      zIndex: "1"

    },
    searchfield: {
      borderRadius: "40px",
      width: "55px",
      transition: "all 0.5s",
      cursor: "pointer",

      "& button": {
        display: "none"
      },

      "&.Mui-focused": {
        width: "200px",
        float: "left",
        backgroundColor: "white",
        borderRadius: "4px",
        zIndex: "10",
      },

      "&.Mui-focused button":{
        display: "block"
      }
    }
  }


  const content = (
    <TextField
      onFocus={() => window.scroll({ top: 0, behavior: 'smooth'})}
      sx={styles.searchcontainer}
      id="input-with-icon-textfield"
      className="TextField"
      placeholder="Search here..."
      InputProps={{
        sx: { ...styles.searchfield },
        startAdornment: (
          <InputAdornment position="start" disablePointerEvents sx={{paddingLeft: "2px"}}>
            <SearchIcon />
          </InputAdornment>
        ),
        // endAdornment: (
        //     <Button>hi</Button>
        // )
      }}
    />
  )
  return content;
}
 
export default SearchBar;