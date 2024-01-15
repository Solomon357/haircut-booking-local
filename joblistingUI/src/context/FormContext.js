import { createContext, useState } from "react";

const FormContext = createContext({})

export const FormProvider = ({ children }) => {

    //TO DO FOR TOMORROW:

    //  1. figure out how to save radio values selections between page changes 
    //  2. once the form functionality works how i want, apply these changes to the main form
    // (3). using figma design create a professionally looking multi step form

    //I PROMISE I WILL USE MOMENT.JS FOR DATE
    let date = new Date(); 
    let nowDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();

    //now to format the current date in a way that can be passed through
    function formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    }

    const currentDate = formatDate(nowDate);

    const title = {
        0: "Type of Haircut",
        1: 'Professional',
        2: 'Time',
        3: 'Confirmation',
        //3: Name and Confirm page
    }

    const [page, setPage] = useState(0)

    //barberInfo[2] should definitely be availability, OR i add another element to the array for availability
    const [data, setData] = useState({
        haircutType: "",
        haircutPrice: 0,
        haircutBookingName: "",
        bookingDate: currentDate,
        barberInfo: "",
        barberPrice: 0, 
        total: 0
    })

    // useEffect(() => {
    //     if (data.sameAsBilling) {
    //         setData(prevData => ({
    //             ...prevData,
    //             shipFirstName: prevData.billFirstName,
    //             shipLastName: prevData.billLastName,
    //             shipAddress1: prevData.billAddress1,
    //             shipAddress2: prevData.billAddress2,
    //             shipCity: prevData.billCity,
    //             shipState: prevData.billState,
    //             shipZipCode: prevData.billZipCode
    //         }))
    //     } else {
    //         setData(prevData => ({
    //             ...prevData,
    //             shipFirstName: "",
    //             shipLastName: "",
    //             shipAddress1: "",
    //             shipAddress2: "",
    //             shipCity: "",
    //             shipState: "",
    //             shipZipCode: ""
    //         }))
    //     }
    // }, [data.sameAsBilling])


    const handleChange = e => {
        const type = e.target.type

        const name = e.target.name

        let value = e.target.value

        //case for type "date"

        //im going to write code here that deals with type "radio"
        if(type === "radio"){
            console.log(e.target.checked) // test
            let radioValues = value.split(","); //in order to create an array of substrings
            radioValues[2] = +radioValues[2]; //radioValues[2] will always be a number so we need to convert string to number here

            //this if statement assigns price based on which radio group is being accessed
            if(name === "haircutType"){ 
                data.haircutPrice = radioValues[2];
            } else{
                data.barberPrice = radioValues[2];
            }
            //console.log(radioValues) // test
            //console.log("current haircutPrice: ", data.haircutPrice) // test
            //console.log("current barberPrice: ", data.barberPrice) // test
        }
        
        //sorting the total for checkout
        data.total = data.haircutPrice + data.barberPrice;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const {barberPrice, ...requiredInputs } = data

    const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1

    //can only move from page 1 to page 2 once evey value on current page has a value
    const canNextPage1 = Object.keys(data)
        .filter(key => key.startsWith('hair'))
        .map(key => data[key])
        .every(Boolean)

    //can only move from page 2 to page 3 once evey value on current page is true (they all have values)
    // i think i want to change this to "once barberInfo is true" because i dont wnat this to take barberPrice into account
    const canNextPage2 = Object.keys(data)
        .filter(key => key.startsWith('barberInfo'))
        .map(key => data[key])
        .every(Boolean)

    //can only move from page 2 to page 3 once evey value on current page is true (they all have values)
    const canNextPage3 = Object.keys(data)
        .filter(key => key.startsWith('booking'))
        .map(key => data[key])
        .every(Boolean)

    // disable prev button if page has an Object.key value of 0
    const disablePrev = page === 0
    
    //disable next based on parameters established above
    const disableNext =
        (page === Object.keys(title).length - 1)
        || (page === 0 && !canNextPage1)
        || (page === 1 && !canNextPage2)
        || (page === 2 && !canNextPage3)
    

    //console.log(disableNext); // should only return false once all data on page is filled
    //console.log(Object.keys(data));

    //these hide functionalities are for the CSS which i havent done yet.
    const prevHide = page === 0 && "remove-button"

    const nextHide = page === Object.keys(title).length - 1 && "remove-button"

    const submitHide = page !== Object.keys(title).length - 1 && "remove-button"

        //for more efficiency i could use something like useMemo for expesive functions in this context
    return (
        <FormContext.Provider value={{ title, page, setPage, data, setData, canSubmit, handleChange, disablePrev, disableNext, prevHide, nextHide, submitHide, currentDate }}>
            {children}
        </FormContext.Provider>
    )
}



export default FormContext