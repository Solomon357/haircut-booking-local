import { CircularProgress, FormControl, FormLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import useFormContext from "../customhooks/useFormContext";
import { ReactComponent as CheckedIcon } from "../images/filled_checked_icon.svg"
import { CustomControlLabel } from "./customstyles/CustomRadio.styles";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { useFetch } from "../customhooks/useFetch";

//haircut option will most likely be accessed in mongo to allow searching
  // const haircutOptions = [
  //   { value: "Skin Fade,30-45 mins,12", id:1 },
  //   { value: "Grade 1 all over,30 mins,7", id:2 },
  //   { value: "Beard Trim,30 mins,7", id:3 },
  //   { value: "Student Discount,30-45 mins,10", id:4 },
  //   { value: "Hair Wash,15 mins,10", id:5 },
  //   { value: "haircutName6,30-45 mins,12", id:6 },
  //   { value: "haircutName7,30 mins,7", id:7 },
  //   { value: "haircutName8,30 mins,7", id:8 },
  //   { value: "haircutName9,30-45 mins,10", id:9 },
  //   { value: "haircutName10,15 mins,10", id:10 },
  //   { value: "haircutName11,30-45 mins,12", id:11 },
  //   { value: "haircutName12,30 mins,7", id:12 },
  //   { value: "haircutName13,30 mins,7", id:13 },
  //   { value: "haircutName14,30-45 mins,10", id:14 },
  //   { value: "haircutName15,15 mins,10", id:15 },
  //   { value: "haircutName16,30-45 mins,12", id:16 },
  //   { value: "haircutName17,30 mins,7", id:17 },
  //   { value: "haircutName18,30 mins,7", id:18 },
  //   { value: "haircutName19,30-45 mins,10", id:19 },
  //   { value: "haircutName20,15 mins,10", id:20 }
  // ];

const HaircutType = () => {

  const { form, handleChange } = useFormContext();
  const { allOptions, isLoading, error } = useFetch(`http://localhost:8080/allHaircutInfo`)
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    //if there are no keys in options then theres no data
    if (Object.keys(allOptions).length > 0){
      setFilteredOptions(allOptions)
    }
  }, [allOptions])


  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchQuery(searchTerm)

    const filteredItems = allOptions.filter((options) =>
      options.value.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setFilteredOptions(filteredItems)
  }

  const haircutInputs = (
    <FormControl sx={{ width:"80%", zIndex:"0" }}>
          
      <FormLabel id="haircut-radio-buttons">Haircut Options</FormLabel>
      
      <RadioGroup
        aria-labelledby="haircut-radio-buttons"
        name="haircutType"
        value={allOptions.value} 
        onChange = {handleChange}
      >
        {filteredOptions && 
          filteredOptions.map((haircuts) => {
          let haircutArr = haircuts.value.split(","); 
          return(
            <CustomControlLabel
              labelPlacement="start"
              key={haircuts.id} 
              checked={form.haircutType === haircuts.value} 
              value={haircuts.value} 
              control={<Radio checkedIcon={<CheckedIcon fill="#57BFC6" width={"25px"}/>} />} 
              label= {
                <Stack direction={"column"}>
                  <Typography>{haircutArr[0]}</Typography>
                  <Typography sx={{color: '#898989'}}>{haircutArr[1]}</Typography>
                  <Typography>from £{haircutArr[2]}</Typography>
                </Stack>
              } 
            />
          )
        })}

      </RadioGroup>
    </FormControl>
  )

  const content = (
    <>
      <SearchBar 
        searchInput={searchQuery} 
        handleSearch={handleSearchChange}
      />
      {isLoading && <CircularProgress />}

      {error &&  <Typography>Sorry something went wrong! please try again</Typography>}

      {!isLoading && !error && filteredOptions.length === 0 
      ? <Typography>No matches from search!! please type something else</Typography>
      : // make this look better later
       haircutInputs
      }
      
    </>
  );

  return content;
}
 
export default HaircutType;