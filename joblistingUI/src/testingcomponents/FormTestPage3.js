import useFormContext from "../customhooks/useFormContext"

const FormTestPage3 = () => {

    const { currentDate, data, handleChange } = useFormContext();
    

    const content = (
        <div>
            <h3>Pick a day for your booking!</h3>

            <div className="flex-col">
                    <label htmlFor="bookingDate">pick date here </label>
                    <input
                        type="date"
                        id="bookingDate"
                        name="bookingDate"
                        min={currentDate}
                        //placeholder="Doe"
                        //pattern="([A-Z])[\w+.]{1,}"
                        value={data.bookingDate}
                        onChange={handleChange}
                    />
            </div>            
        </div>
    )

    return content
}
 
export default FormTestPage3;