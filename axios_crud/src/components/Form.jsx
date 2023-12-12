import {
  Box,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BasicDatePicker from "./BasicDatePicker";
import axios from "axios";
import Display from "./Display";

const Form = () => {
  const [formData, setFormData] = useState([]);

  /* ---------------------------- Get APi data ---------------------------- */
  const getData = () => {
    axios.get("http://localhost:3000/posts").then((res) => {
      console.log(res.data);
      setFormData(res.data || []);
    });
  };

 /* ------------------------- Form input change event ------------------------ */
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

/* ----------------------- Form data submited function ---------------------- */
  const handleSubmit = () => {
    axios.post("http://localhost:3000/posts", formData).then((res) => {
      console.log(res.data);
      getData();
      //  setFormData([...formData, res.data]);
    });
  };
  /* ------------------------------- Delete data ------------------------------ */
 const handleDelete = (id) => {
    console.log(id);

    axios.delete(`http://localhost:3000/posts/${id}`).then(() => {
      //   getData();
      setFormData(formData.filter((e) => e.id !== id));
    });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box m="3.5rem 23em" border=".1rem solid">
        <Box m="1rem">
          <Typography variant="h6" textAlign="center" marginBottom="1rem">
            User Form
          </Typography>
          <TextField
            placeholder="Enter your First Name"
            label="First Name"
            name="fname"
            required
            variant="outlined"
            onChange={handleInputChange}
            sx={{ maxWidth: "14rem", marginRight: 4 }}
          />

          <TextField
            placeholder="Enter your Last Name"
            label="Last Name"
            name="lname"
            required
            variant="outlined"
            onChange={handleInputChange}
          />
        </Box>
        <Box m="1rem">
          <TextField
            placeholder="Enter your Card No"
            label="Card No"
            name="cardNo"
            required
            variant="outlined"
            onChange={handleInputChange}
            sx={{ marginRight: 4 }}
          />
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                onChange={handleInputChange}
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box m="1rem" style={{ display: "inline-block" }}>
          <BasicDatePicker
            style={{ display: "inline-block" }}
            onChange={handleInputChange}
          />
          {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}

          <TextField
            placeholder="Enter your Address"
            label="Address"
            name="address"
            required
            variant="outlined"
            onChange={handleInputChange}
            style={{ marginTop: "1rem" }}
          />
        </Box>
        <Box m="1rem">
          <TextField
            placeholder="Enter Assembly No and Name"
            label="Assembly No and Name"
            name="assembly"
            variant="outlined"
            onChange={handleInputChange}
            sx={{ marginRight: 4 }}
          />
          <TextField
            placeholder="Enter part No and Name"
            label="Part No and Name"
            name="part"
            variant="outlined"
            onChange={handleInputChange}
          />
        </Box>
        <Box textAlign="center" mb="2rem">
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="success"
            sx={{ marginRight: "1rem" }}
          >
            Add Data
          </Button>
          <Button variant="contained" backgroundColor="#0063cc">
            Cancle
          </Button>
        </Box>
</Box>
        {formData?.map((val,ind)=>(
          <Display key={ind} data={val}
          onDelete={handleDelete}/>
         )
      )}
      
    </>
  );
};

export default Form;
