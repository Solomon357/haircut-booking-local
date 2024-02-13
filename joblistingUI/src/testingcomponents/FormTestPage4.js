import { Box, Button, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { SearchField } from "../pages/customstyles/SearchField.styles";
//import CustomSearchBar from "../pages/customstyles/CustomSearchBar.styles";
const FormTestPage4 = () => {

    // const { data, handleChange } = useFormContext()
    //const theme = useTheme();
    //const matches = useMediaQuery(theme.breakpoints.down("md"));

    const styles = {
        search: {
            borderRadius: "40px",
            width: "55px",
            float: "inline-start",
            backgroundColor: "white",
            transition: "all 0.5s",
            marginLeft: "50px",

            "& button": {
                display: "none"
            },

            "&.Mui-focused": {
                width: "200px",
                float: "left",
                backgroundColor: "pink",
                borderRadius: "0",
            },

            "&.Mui-focused button":{
                display: "block"
            }
        }
    }


    //FROM CSS DEMO
    //the styling is split into these controls
    // Box: .search-container
    // Input: (Textfield in my case??) .searchleft
    // label: .button AND .searchbutton
    // span (Icon): .mglass


    return (
        <Box backgroundColor="white">

            <Box className="search-container">
                <input className="search" id="searchleft" type="search" name="q" placeholder="Search"/>
                <label className="button searchbutton" htmlFor="searchleft"><span className="mglass">&#9906;</span></label>
            </Box>

            {/* <Box sx={styles.buttonTest}>hello</Box>

            <TextField
                sx={styles.newSearchTest}
                type="text"
                placeholder="Search here..."
            /> */}
            <TextField
                id="input-with-icon-textfield"
                className="TextField"
                //label="TextField"
                InputProps={{
                    sx: { ...styles.search },
                    startAdornment: (
                        <IconButton size="small">
                            <SearchIcon />
                        </IconButton> 
                    ),
                    // endAdornment: (
                    //     <Button>hi</Button>
                    // )
                }}
                //variant="standard"
            />

            <TextField
                label="Search"
                variant="outlined"
                sx={{
                    '& label': { paddingLeft: (theme) => theme.spacing(2) },
                    '& input': { paddingLeft: (theme) => theme.spacing(3.5) },
                    '& fieldset': {
                    paddingLeft: (theme) => theme.spacing(2.5),
                    borderRadius: '50px',
                    },
                }}
            />

            <SearchField />

            {/* <input type="text" class="search-click" name="" placeholder="search here..." /> */}
           

        </Box>


        // <div>
        //   {matches ? (
        //     <Box 
        //         sx={{ 
        //             backgroundColor: "green",
        //             height: "400px"
        //         }}
        //     >
        //         "XS in my project"
        //     </Box>
        //   ) : (
        //     <Box 
        //         sx={{ 
        //             backgroundColor: "red", 
        //             position: "absolute",
        //             bottom: "0",
        //             right:"0",
        //             left:"0"
        //         }}
        //     >
        //         "MD and up"
        //     </Box>
        //   )}
        // </div>
    );
 }
  
 export default FormTestPage4;