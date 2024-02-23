import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Feed = () => {
  //useStates
  const [query, setQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [post, setPost] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:8080/allInfo`) //fetching from API
      .then(response => response.json())
      .then(data => {
        setPost(data)
        setFilteredPosts(data)
        //console.log("Info data coming in: ", data);
      })
      .catch(err => console.log(err))
  }, []);


  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setQuery(searchTerm)

    // filter the items using the post state
   
    const filteredItems = post.filter((options) =>
      options.value.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredPosts(filteredItems);
    
  }

  return (
    <Grid container spacing={2} sx={{ margin: "2%" }}>
      <Grid item xs={12} sx={12} md={12} lg={12}>
      <Button sx={{ margin: "1% 2%" }} variant="outlined">
            <Link to="/">Home</Link>
          </Button>
        <Box>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search..."
            sx={{ width: "75%", padding: "2% auto" }}
            fullWidth
            value={query}
            onChange={handleInputChange}
          />
        </Box>
      </Grid>
      
      {filteredPosts &&
        filteredPosts.map((options) => {
          return (
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "2rem", fontWeight: "600" }}
                >
                  {options.value}
                </Typography>
                {/* <Typography sx={{ color: "#585858", marginTop:"2%" }} variant="body" >
                  Description: {options.desc}
                </Typography>
                <br />
                <br />
                <Typography variant="h6">
                  Years of Experience: {options.exp} years
                </Typography>

                <Typography gutterBottom  variant="body">Skills : </Typography>
                {options.techs.map((s, i) => {
                  return (
                    <Typography variant="body" gutterBottom key={i}>
                      {s} .
                      {` `}
                    </Typography>
                  );
                })} */}
  
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Feed;
