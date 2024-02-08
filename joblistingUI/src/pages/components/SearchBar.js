import { Box } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";

const SearchBar = () => {
  const { page } = useFormContext()

  const styles = {
    searchbar : {
      display: page > 0 ? "none": "block",
      position:"sticky", 
      top: "63px", 
      alignSelf: "flex-start", 
      width: {xs:"100%", md: "50%"},
      mb: "20px",
      backgroundColor: "lightcoral", 
      //marginX: "3px", //prob will not agree with me for responsiveness later
      //border: "1px solid grey" 
    }
  }

  
  const content = (
    <Box sx={styles.searchbar}>
      Search bar will be here
    </Box>
  )
  return content;
}
 
export default SearchBar;