import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";


//checkout box + continue button
const CheckoutBox = () => {

    //styles goes here

    const { page, setPage, title, data, disableNext } = useFormContext();

    const handleNext = () => {
        setPage(next => next + 1)
    }


    const content = (
        <Box 
        sx={{ 
          padding: "8px", 
          //border: "1px solid black", 
          //width:{xs:"100%", md: "50%"},
          position:"fixed",
          top:"150px",
          right:"4%",
          width:"636px"
          }}
        >
            <Stack direction={"column"} gap={"5px"} >

                <Typography variant='h5'>Checkout</Typography>
    
                <Stack padding={"10px"} direction="column" justifyContent={"center"} gap={"10px"} sx={{border: "3px solid gray", borderRadius: "15px", height:"200px" }}>
    
                <Stack direction={"column"} gap={"2px"}>
                    <Typography>{data.bookingDate}</Typography>
                    <Typography>{data.bookingTime}</Typography>
                </Stack>
    
                <Divider variant='middle'/>
    
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography>{data.haircutType}</Typography>
                    <Typography>£{data.total}</Typography>
                </Stack>
    
                <Divider variant='middle'/>
    
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography sx={{fontWeight: "bold"}}>Total</Typography>
                    <Typography sx={{fontWeight: "bold"}}>£{data.total}</Typography>
                </Stack>
            </Stack>
    
            {/* Make a custom style for the buttons */}
            <Box>
                <Button
                    sx={{ 
                    width: "100%", 
                    margin: "2% auto", 
                    backgroundColor: "#57BFC6",
                    display: page === Object.keys(title).length -1 ? "none" : "block" }}
                    variant="contained"
                    type="button"
                    onClick={handleNext}
                    disabled={disableNext}
                >
                    Continue
                </Button> 
            </Box>
        </Stack> 
      </Box>    
    )
    return content;
}
 
export default CheckoutBox;