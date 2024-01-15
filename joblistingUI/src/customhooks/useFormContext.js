import { useContext } from "react";
import FormContext from "../context/FormContext";

const useFormContext = () => {
    //this is how we grab the progress of the form in each page
    return useContext(FormContext);
}
 
export default useFormContext;