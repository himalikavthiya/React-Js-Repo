import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
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
import dayjs from "dayjs";
import Swal from "sweetalert2/dist/sweetalert2.js";
// import "sweetalert2/src/sweetalert2.scss";

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
  const [olddata, setolddata] = useState({
    // fname: "",
    // lname: "",
    // cardNo: "",
    // address: "",
    // assembly: "",
    // part: "",
    // DateofBirth: "",
  });
  const [update, setupdate] = useState("");
  const { state } = useLocation();

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setdata({ ...data, DateofBirth: date });
  };
  /* ------------------------- Form input change event ------------------------ */
  const handleInputChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  /* ----------------------- Form data submited function ---------------------- */
  const handleSubmit = () => {
    /*if click the update button put Api Call */

    if (update) {
      /*checks if the key is already in the data array and 
      returns true (Api is not called)if it exists otherwise returns false and
      returns false and returns(Api is called)*/

      const changesExist = Object.keys(data).some((key) => {
        return data[key] !== olddata[key];
      });

      if (changesExist) {
        // check add update data for changes
        axios.put(url + endpointUpdate + update, data).then((res) => {
          setFormData([...formData, res.data]);
          const storedData = JSON.parse(localStorage.getItem("Posts")) || [];

          // Find the index of the element with id equal to update data
          const indexToUpdate = storedData.findIndex(
            (item) => item.id === update
          );
          // specific index stored in update index in array
          storedData[indexToUpdate] = {
            ...storedData[indexToUpdate],
            ...res.data,
          };

          // Update localStorage with the modified array
          localStorage.setItem("formData", JSON.stringify(storedData));
        });
      }
    } else {
      axios.post(url + endpoint, data).then((res) => {
        setFormData([...formData, res.data]);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }
    navigate("/");
  };

  useEffect(() => {
    if (state) {
      console.log(state,"state")
      setSelectedDate(dayjs(state.userData.DateofBirth)); // date of birth set using dayjs format
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
      setolddata({
        //
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
          required
          id="fname"
          defaultValue="foo"
          placeholder="Enter your First Name"
          label="First Name"
          name="fname"
          variant="outlined"
          value={data.fname}
          onChange={handleInputChange}
          // error={!!error.fname}
          // helperText={error.fname && "firstname is required"}
          sx={{ marginRight: 4 }}
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
            name="radiobuttons"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              onChange={handleInputChange}
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              onChange={handleInputChange}
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box m="1rem">
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          style={{ margin: "1rem 0", width: "50%" }}
        >
          <DatePicker
            label="Date of Birth"
            name="DateofBirth"
            value={selectedDate}
            onChange={handleDateChange}
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
