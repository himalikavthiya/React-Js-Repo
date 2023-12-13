import React, { useEffect, useState } from "react";
import axios from "axios";
import { endpoint, endpointDelete, url } from "../constant";
import {
  Box,
  Typography,
  Button,
  CardActions,
  CardContent,
  Card,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Display = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState([]);

  /* -------------------------------- get data -------------------------------- */
  const get_api =  () => {
   axios.get(url + endpoint).then((res) => {
      setFormData(res.data || []);
      localStorage.setItem("Posts", JSON.stringify(res.data));
    });
  };
  /* ------------------------------- Delete data ------------------------------ */
  const handleDelete = (id) => {
    axios.delete(url + endpointDelete + id).then(() => {
      setFormData(formData.filter((e) => e.id !== id));
    });
  };

  useEffect(() => {
    get_api();
  }, []);

  return (
    <>
      <Box m="6.5rem 13rem">
        <Box>
          <Button
            variant="contained"
            color="success"
            sx={{ marginBottom: "1rem" }}
            onClick={() => {
              navigate("/addUser");
            }}
          >
            AddUser
          </Button>
        </Box>

        {formData?.map((val, ind) => {
          return (
            <Box
              key={ind}
              sx={{ display: "inline-block", mx: "1rem", width: "14rem" }}
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
                  <Button
                    size="small"
                    onClick={() =>
                      navigate("/addUser", { state: { userData: val } })
                    }
                  >
                    Update
                  </Button>
                </CardActions>
              </Card>
            </Box>
          );
        })}
      </Box>
    </>
  );
};
