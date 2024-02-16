import { createContext, useState } from "react";

const FormContext = createContext({})

export const FormProvider = ({ children }) => {

  //TO DO FOR TOMORROW: 
  //1. work on design of final page
  //2. functionality of search bar 
  //3. Quality Assurance, add all the fancy animations and ideas i want
  //(4). finally deal with availability functionality feature
  
  const title = {
    0: "Select Haircut Type",
    1: 'Name of Booking',
    2: 'Select Professional',
    3: 'Select Date & Time',
    4: 'Confirmation',
  }

  const [page, setPage] = useState(0)

  //barberInfo[2] should definitely be availability, OR i add another element to the array for availability
  const [data, setData] = useState({
    haircutType: "",
    haircutPrice: 0,
    haircutBookingName: "",
    bookingDate: "",
    bookingTime: "", 
    barberInfo: "",
    barberPrice: 0, 
    total: 0
  })

  const handleChange = e => {
    const type = e.target.type 
    //console.log(type) // test
    const name = e.target.name

    let value = e.target.value

    if(type === "radio"){
      let radioValues = value.split(",");
      radioValues[2] = +radioValues[2];

      //this if statement assigns price based on which radio group is being accessed
      if(name === "haircutType"){ 
        //** insead of changing data directly consider changing the value variable instead for consistency
        data.haircutPrice = radioValues[2];
      } else if(name === "barberInfo"){
        data.barberPrice = radioValues[2];
      }
      
      //console.log(radioValues) // test
      //console.log("current haircutPrice: ", data.haircutPrice) // test
      //console.log("current barberPrice: ", data.barberPrice) // test
    }

    //console.log(data.bookingDate)// test
    data.total = data.haircutPrice + data.barberPrice;

    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  //needed to be separated from handleChange because name is not a prop in DatePicker
  const handleDateChange = (date) => {
    //date.preventDefault()
    let isoDate = date.toISOString()
    isoDate = isoDate.substring(0, isoDate.indexOf('T')) 
    const name = "bookingDate"
    let value = isoDate
    //console.log(isoDate); //test

    //then i can setData with the same functionality as handleChange
    setData(prevData => ({
      ...prevData,
      [name]: value
    })) 
  }

  const {barberPrice,
    ...requiredInputs } = data

  const canSubmit = [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1

  //can only move to the next page once evey value on current page has a value
  const canNextPage1 = Object.keys(data)
    .filter(key => key.startsWith('haircutT'))
    .map(key => data[key])
    .every(Boolean)

  const canNextPage2 = Object.keys(data)
    .filter(key => key.startsWith('haircutB'))
    .map(key => data[key])
    .every(Boolean)

  const canNextPage3 = Object.keys(data)
    .filter(key => key.startsWith('barberI'))
    .map(key => data[key])
    .every(Boolean)

  const canNextPage4 = Object.keys(data)
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
    || (page === 3 && !canNextPage4)

//for more efficiency i could use something like useMemo for expesive functions in this context
  return (
    <FormContext.Provider value={{ setData, setPage, handleChange, handleDateChange, title, page, data, canSubmit, disablePrev, disableNext }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContext