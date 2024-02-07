import { Box } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";

const SearchBar = () => {
    const { page } = useFormContext()
    const content = (
        <Box
        //marginX={"3px"} //prob will not agree with me for responsiveness later
        //border={"1px solid grey"} 
        mb={"20px"}
        width={{xs:"100%", md: "50%"}}
        position={"sticky"}
        top={"63px"} 
        alignSelf={"flex-start"}
        sx={{ backgroundColor: "lightcoral", display: page > 0 ? "none": "block"}}
      >
        Search bar will be here
      </Box>
    )
    return content;
}
 
export default SearchBar;