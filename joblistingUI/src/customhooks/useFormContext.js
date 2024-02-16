import { useContext } from "react";
import FormContext from "../context/FormContext";

 //this is how we grab the progress of the form in each page
const useFormContext = () => {
  return useContext(FormContext);
}
 
export default useFormContext;