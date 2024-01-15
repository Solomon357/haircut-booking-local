import useFormContext from "../customhooks/useFormContext"
import FormTestPage1 from "./FormTestPage1"
import FormTestPage2 from "./FormTestPage2"
import FormTestPage3 from "./FormTestPage3"
import FormTestPage4 from "./FormTestPage4"

const FormTestInputs = () => {

    const { page } = useFormContext();

    const display = {
        0: <FormTestPage1 />,
        1: <FormTestPage2 />,
        2: <FormTestPage3 />,
        3: <FormTestPage4 />
    }

    const content = (
        <div className="form-inputs flex-col">
            {display[page]}
        </div>
    )


    return content
}
export default FormTestInputs