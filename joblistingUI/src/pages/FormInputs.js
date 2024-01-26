import { Box } from "@mui/material";
import useFormContext from "../customhooks/useFormContext";
import HaircutType from "./HaircutType";
import HaircutName from "./HaircutName";
import HaircutBarber from "./HaircutBarber";
import HaircutDate from "./HaircutDate";
import HaircutConfirm from "./HaircutConfirm";


const FormInputs = () => {
    const { page } = useFormContext();

    const display = {
        0: <HaircutType />,
        1: <HaircutName />,
        2: <HaircutBarber />,
        3: <HaircutDate />,
        4: <HaircutConfirm />
    }
    

    return ( 
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {display[page]}
      </Box>
     );
}
 
export default FormInputs;