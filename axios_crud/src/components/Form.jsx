import axios from "axios";
import React, { useEffect, useState } from "react";
import { endpoint, endpointDelete, endpointUpdate, url } from "../constant";
import BasicDatePicker from "./BasicDatePicker";
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
  CardActions,
  CardContent,
  Card,
} from "@mui/material";

export const Form = () => {
  const [formData, setFormData] = useState([]);
  const [data, setdata] = useState({});
  const [update, setupdate] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  /* -------------------------------- get data -------------------------------- */
  const get_api = () => {
    axios.get(url + endpoint).then((res) => {
      console.log(res.data);
      setFormData(res.data || []);
    });
  };
  /* ------------------------- Form input change event ------------------------ */
  const handleInputChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  /* ----------------------- Form data submited function ---------------------- */
  const handleSubmit = () => {
    axios.post(url + endpoint, data).then((res) => {
      setFormData([...formData, res.data]);
    });
  };
  /* ------------------------------- Delete data ------------------------------ */
  const handleDelete = (id) => {
    axios.delete(url + endpointDelete + id).then(() => {
      setFormData(formData.filter((e) => e.id !== id));
      setIsUpdating(true);
    });
  };
  /* ------------------------------- update data ------------------------------ */
  const updateData = (id, ind) => {
    const final = data[ind];
    setupdate(final);
  };

  const finalUpdate = (e) => {
    setupdate({ ...update, [e.target.name]: e.target.value });
  };

  const final = (id) => {
    axios.put(url + endpointUpdate + id, update).then((res) => {
      const updatedData = [...formData];
      const index = updatedData.findIndex((item) => item.id === id);
      updatedData[index] = update;
      setdata(updatedData);
    });
  };
  const handleClick = () => {
    if (isUpdating) {
      final();
    } else {
      handleSubmit();
    }
  };
  // const finalDataUpdate = () => {
  //   if (setIsUpdating) {
  //     finalUpdate();
  //   } else {
  //     handleInputChange();
  //   }
  // };
  useEffect(() => {
    get_api();
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
            onChange={finalDataUpdate}
            sx={{ maxWidth: "14rem", marginRight: 4 }}
          />

          <TextField
            placeholder="Enter your Last Name"
            label="Last Name"
            name="lname"
            required
            variant="outlined"
            onChange={finalDataUpdate}
          />
        </Box>
        <Box m="1rem">
          <TextField
            placeholder="Enter your Card No"
            label="Card No"
            name="cardNo"
            required
            variant="outlined"
            onChange={finalDataUpdate}
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
                onChange={finalDataUpdate}
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
          <TextField
            placeholder="Enter your Address"
            label="Address"
            name="address"
            required
            variant="outlined"
            onChange={finalDataUpdate}
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
            onClick={handleClick}
            variant="contained"
            color="success"
            sx={{ marginRight: "1rem" }}
          >
            {isUpdating ? "Update" : "AddData"}
          </Button>
          <Button variant="contained">Cancle</Button>
        </Box>
      </Box>

      {formData?.map((val, ind) => {
        return (
          <>
            <Box
              key={ind}
              sx={{ display: "inline-block", mx: "2rem", width: "14rem" }}
            >
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 18 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {val.fname} {val.lname}
                  </Typography>
                  <Typography variant="body2">{val.cardNo}</Typography>
                  <Typography variant="body2">{val.sex}</Typography>
                  <Typography variant="body2">{val.dob}</Typography>
                  <Typography variant="body2">{val.address}</Typography>
                  <Typography variant="body2">{val.assembly}</Typography>
                  <Typography variant="body2">{val.part}</Typography>
                </CardContent>

                <CardActions>
                  <Button size="small" onClick={() => handleDelete(val.id)}>
                    Delete
                  </Button>
                  <Button size="small" onClick={() => updateData(val.id, ind)}>
                    Update
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </>
        );
      })}
    </>
  );
};
