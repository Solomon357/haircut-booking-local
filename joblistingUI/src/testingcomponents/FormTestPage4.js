import { Box, Input, InputLabel, Typography } from "@mui/material";

const FormTestPage4 = () => {

    // const { data, handleChange } = useFormContext()
    //const theme = useTheme();
    //const matches = useMediaQuery(theme.breakpoints.down("md"));

    const styles = {
        searchcontainerTest: {
            position: "relative",
            display: "inline-block",
            margin: "4px 2px",
            height: "50px",
            width: "50px",
            verticalAlign: "bottom",
        },
        buttonTest: {
            display: "inline-block",
            margin: "4px 2px",
            backgroundColor: "#444",
            fontSize: "14px",
            paddingLeft: "32px",
            paddingRight: "32px",
            height: "50px",
            lineHeight: "50px",
            textAlign: "center",
            color: "white",
            textDecoration: "none",
            cursor: "pointer",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            //borderRadius: "30px",

            "&:hover": {
                transitionDuration: "0.8s",
                MozTransitionDuration: "0.8s",
                WebkitTransitionDuration: "0.8s",
                
                backgroundColor: "white",
                color: "black"
            }
        },
        searchbuttonTest: {
            position: "absolute",
            fontSize: "22px",
            width: "100%",
            margin: "0",
            padding: "0",

            "&:focus": {
                transitionDuration: "0.8s",
                MozTransitionDuration: "0.8s",
                WebkitTransitionDuration: "0.8s",
                backgroundColor: "white",
                color: "black"
            }
   
        },
        mglassTest: {
            display: "inline-block",
            pointerEvents: "none",
            WebkitTransform: "rotate(-45deg)",
            msTransform: "rotate(-45deg)",
        },
        searchTest: {
            "&:focus": {
                transitionDuration: "0.4s",
                MozTransitionDuration: "0.4s",
                WebkitTransitionDuration: "0.4s",
                backgroundColor: "white",
                color: "black",
                width: "363px", /* Bar width+1px */
                padding: "0 16px 0 0"
            },


            position: "absolute",
            left: "49px", /* Button width-1px (Not 50px/100% because that will sometimes show a 1px line between the search box and button) */
            backgroundColor: "white",
            outline: "none",
            border: "none",
            padding: "0",
            width: "0",
            height: "100%",
            zIndex: "10",
            transitionDuration: "0.4s",
            MozTransitionDuration: "0.4s",
            WebkitTransitionDuration: "0.4s",
        }
    }

    return (
        <Box backgroundColor="black">
            <Box className="search-container">
                <input className="search" id="searchleft" type="search" name="q" placeholder="Search"/>
                <label className="button searchbutton" htmlFor="searchleft"><span className="mglass">&#9906;</span></label>
            </Box>

            <Box sx={styles.buttonTest}>hello</Box>
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