import useFormContext from "../customhooks/useFormContext"

const FormTestPage2 = () => {

    const { data, handleChange } = useFormContext()

    const barberOptions = [
        {
          barberValue: "Jeff,Apprentice,0" 
        },
        {
          barberValue: "Jonny,Mid-level,3"
        },
        {
          barberValue: "Taylor,Expert,5"
        }
    ];


    const content = (
        <div>
            <div className="split-container">
            <h3>Which barber would you like?</h3>
            <ul>
              {barberOptions.map(({ barberValue }, index) => {

                let barberArr = barberValue.split(",");
                //barberArr[2] = barberArr[2] === undefined ? 0 : barberArr[2];

                return (
                  <li key={index}>
                    <div >
                      <div>
                        <input
                          type="radio"
                          id={`barber-radio-${index}`}
                          name="barberInfo"
                          value={barberValue}
                          checked={data.barberInfo === barberValue}
                          onChange={handleChange}  
                        />
                        <label htmlFor={`barber-radio-${index}`}>{barberArr[0] +" - " + barberArr[1] +" (£"+ (data.haircutPrice + (+barberArr[2]))+ ")"}</label>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            </div>
        </div>
    )

    return content
}
 
export default FormTestPage2;