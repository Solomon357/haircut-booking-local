
import useFormContext from "../customhooks/useFormContext";
import FormTestInputs from "./FromTestInputs";

const FormTest = () => {

    const {
        page,
        setPage,
        data,
        title,
        canSubmit,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide
    } = useFormContext()

   
    const handlePrev = () => {
        setPage(prev => prev - 1)
    }

    const handleNext = () => {
        setPage(next => next + 1)
        

    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(data))
    }


    const content = (
        <form className="form flex-col" onSubmit={handleSubmit}>

            <header className="form-header">
                <h2>{title[page]}</h2>
                {/* <span>page {page} / {Object.keys(title).length -1}</span> */}

                <FormTestInputs />

                <div className="button-container">

                    <button type="button" className={`button ${prevHide}`} onClick={handlePrev} disabled={disablePrev}>Prev</button>

                    <button type="button" className={`button ${nextHide}`} onClick={handleNext} disabled={disableNext}>Next</button>

                    <button type="submit" className={`button ${submitHide}`} disabled={!canSubmit}>Submit</button>
                </div>
                <div className="total-container"> Total = £{data.total}</div>
            </header>

        </form>
    )

    return content

}
 
export default FormTest;