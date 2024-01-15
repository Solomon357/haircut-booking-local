import React from "react";
import useFormContext from "../customhooks/useFormContext";

const FormTestPage1 = () => {


    const { data, handleChange } = useFormContext()

    const haircutOptions = [
        {
          haircutValue: "Skin Fade,30mins-45mins,12"
        },
        {
          haircutValue: "Grade 1 all over,30mins,7"
        },
        {
          haircutValue: "Beard Trim,30mins,7"
        }
    ];
   

    
    const content = (
        <div className="flex-col">
            <div className="split-container">
            <ul>
              {haircutOptions.map(({ haircutValue }, index) => {
                //convert string option to string array so we can use separate words
                let haircutArr = haircutValue.split(",");
                //data.haircutType = haircutValue;
                
                return (
                  <li key={index}>
                    <div>
                      <div>
                        <input
                          type="radio"
                          id={`haircut-radio-${index}`}
                          name="haircutType"
                          value={haircutValue} // i believe this is the right call, i just need to adapt how i pull data from options object.
                          checked={data.haircutType === haircutValue} // once checked assign the data to the global scope
                          onChange={handleChange}
                        />
                        <label htmlFor={`haircut-radio-${index}`}>{haircutArr[0] + " from £" + haircutArr[2]}</label>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

                <div className="flex-col">
                    <label htmlFor="haircutBookingName">Booking Name: </label>
                    <input
                        type="text"
                        id="haircutBookingName"
                        name="haircutBookingName"
                        placeholder="Doe"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.haircutBookingName}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div> 
    )

    return content
}
 
export default FormTestPage1;