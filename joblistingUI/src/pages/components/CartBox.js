import { Box, Divider, Stack, Typography } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ScheduleIcon from '@mui/icons-material/Schedule';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { NextButton } from "../customstyles/Button.styles";


//cart box + continue button
const CartBox = () => {
  const { page, setPage, title, form, disableNext } = useFormContext();

  
  let haircutArr = form.haircutType ? form.haircutType.split(",") : ["Select a Service", ""];
  let barberArr = page >= 2 && form.barberInfo ? form.barberInfo.split(",") : ["", ""];

  //capitilised for display purposes
  let name = form.haircutBookingName;
  let bookingName = page > 1 && name 
    ? " for "+ name.charAt(0).toUpperCase() + name.slice(1)  
    : ""
  ;
  //im using this to try render based on mui breakpoints
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('md')) 

  
  const styles = {
    cartcontainer: {
      //padding: "8px", 
      //border: "5px solid black", 
      //width:{xs:"100%", md: "50%"},
      position:{xs:"sticky", md:"fixed"},
      top:{ md:"150px"},
      bottom:{xs: "0"},
      right:{md:"15%"},
      height: "fit-content",
      width:{xs:"100%", md: "400px"},
      backgroundColor: "white"
    },

    cartcontent: {
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center",
      border: {md: "1px solid gray"},
      borderTop: {xs: "1px solid gray"},
      borderBottom: {xs: "1px solid gray"},
      borderRadius: {xs: "0", md: "10px"}, 
      height:"fit-content", 
      padding: "10px",
      //backgroundColor: "white"
      //gap: "10px"
    },
    continue : {
      display: page === Object.keys(title).length -1 ? "none" : "block",
      width: {xs: "fit-content", md:"100%"}, 
      margin: "2% auto", 
    }
  }

  const handleNext = () => {
    setPage(next => next + 1)
  }


  const smallCart = (
    <Box sx={styles.cartcontent}>
      <Stack direction={"row"} justifyContent={"space-between"}>

        <Stack direction={"column"}>
          <Typography fontWeight={"bold"}> £{form.total}</Typography>
          <Typography color={"gray"}>{haircutArr[0]} &bull; {haircutArr[1]}</Typography>
        </Stack>

        <Box>
          <NextButton
            sx={styles.continue}
            variant="contained"
            type="button"
            onClick={handleNext}
            disabled={disableNext}
            disableRipple
          >
            Continue 
          </NextButton>
        </Box>
      </Stack>
    </Box>
  )


  const bigCart = (
    <Box sx={styles.cartcontent}>

      <Typography variant="h5" alignSelf={"center"} >Cart</Typography>

      <Divider variant='middle'/>

      <Stack direction={"column"} gap={"2px"} marginY={"20px"}>
        { form.bookingDate && page >= 3
          ? <Stack direction={"row"} gap={"10px"}> 
              <CalendarTodayIcon /> 
              <Typography>{form.bookingDate}</Typography>
            </Stack>
          : ""
        }

        { form.bookingTime && page >= 3 
          ? <Stack direction={"row"} gap={"10px"}> 
              <ScheduleIcon /> 
              <Typography>{form.bookingTime}</Typography>
            </Stack>
          : ""
        }
      </Stack>

      <Stack direction={"row"} justifyContent={"space-between"} marginY={"20px"}>
        <Stack direction={"column"}>
          <Typography>{haircutArr[0] + bookingName}</Typography>
          <Typography>{haircutArr[1] + (barberArr[0] ? " with "+ barberArr[0] : "")}</Typography>
        </Stack>
        <Typography>£{form.total}</Typography>
      </Stack>

      <Box height={"70px"}></Box>

      <Divider variant='middle'/>

      <Stack direction={"row"} justifyContent={"space-between"}  marginY={"15px"}>
        <Typography sx={{fontWeight: "bold"}}>Total</Typography>
        <Typography sx={{fontWeight: "bold"}}>£{form.total}</Typography>
      </Stack>

      <Box>
        <NextButton
          sx={styles.continue}
          variant="contained"
          type="button"
          onClick={handleNext}
          disabled={disableNext}
        >
          Continue
        </NextButton> 
      </Box>
    </Box>         
  )

  const content = (
    <Box sx={styles.cartcontainer}>
      {small ? smallCart : bigCart}
    </Box>
  )

  return content;
}
 
export default CartBox;