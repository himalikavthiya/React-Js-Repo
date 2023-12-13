import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { endpoint, endpointUpdate, url } from "../constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState([]);
  const [data, setdata] = useState({
    fname: "",
    lname: "",
    cardNo: "",
    address: "",
    assembly: "",
    part: "",
    DateofBirth: "",
  });
  const [update, setupdate] = useState("");
  const [date, setdate] = useState(null);
  const { state } = useLocation();

  /* ------------------------- Form input change event ------------------------ */
  const handleInputChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  /* ----------------------- Form data submited function ---------------------- */
  const handleSubmit = () => {
    if (update) {
      //   console.log(localStorage.getItem("Posts"));
      axios.put(url + endpointUpdate + update, data).then((res) => {
        setFormData([...formData, res.data]);

        const storedData = JSON.parse(localStorage.getItem("Posts")) || [];

        // Find the index of the element with id equal to update data
        const indexToUpdate = storedData.findIndex(
          (item) => item.id === update
        );

        storedData[indexToUpdate] = {
          ...storedData[indexToUpdate],
          ...res.data,
        };

        // Update localStorage with the modified array
        localStorage.setItem("formData", JSON.stringify(storedData));
      });
    } else {
      axios.post(url + endpoint, data).then((res) => {
        console.log(res.data);
        setFormData([...formData, res.data]);
      });
    }
    navigate("/");
  };

  useEffect(() => {
    if (state) {
      setupdate(state.userData.id); // state through find user id
      setdata({
        ...data,
        fname: state.userData.fname,
        lname: state.userData.lname,
        cardNo: state.userData.cardNo,
        assembly: state.userData.assembly,
        address: state.userData.address,
        part: state.userData.part,
        DateofBirth: state.userData.DateofBirth,
      });
    }
  }, []);

  return (
    <Box m="4.5rem 39rem" border=".1rem solid" borderRadius="1rem">
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
          value={data.fname}
          onChange={handleInputChange}
          sx={{ maxWidth: "14rem", marginRight: 4 }}
        />

        <TextField
          placeholder="Enter your Last Name"
          label="Last Name"
          name="lname"
          required
          variant="outlined"
          value={data.lname}
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
          value={data.cardNo}
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

      <Box ml="1rem">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            // name="DateofBirth"
            label="DateofBirth"
            value={data && data.DateofBirth}
            onChange={(date) => {
              console.log(setdate(date));
              // handleInputChange
            }}
            // onChange={handleInputChange}
          />
        </LocalizationProvider>

        <TextField
          placeholder="Enter your Address"
          label="Address"
          name="address"
          required
          variant="outlined"
          value={data.address}
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
          value={data.assembly}
          onChange={handleInputChange}
          sx={{ marginRight: 4 }}
        />
        <TextField
          placeholder="Enter part No and Name"
          label="Part No and Name"
          name="part"
          variant="outlined"
          value={data.part}
          onChange={handleInputChange}
        />
      </Box>
      <Box textAlign="center" mb="2rem">
        <Button
          variant="contained"
          color="success"
          sx={{ marginRight: "1rem" }}
          onClick={handleSubmit}
        >
          {update ? "Update" : "Add"}
        </Button>
        <Button variant="contained">Cancle</Button>
      </Box>
    </Box>
  );
};

export default AddUser;
