import { Box, Button, Card, CardContent, Typography,CardActions } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Display = ({data,onDelete}) => {
    const {
        id,
    cardNo,
    lname,
    fname,
     sex,
    dob,
    address,
    assembly,
    part,
  } = data;
//   const [formData, setFormData] = useState([]);


   const deleteData = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3000/posts/${id}`).then(() => {
         onDelete(id);
      //   getData();
    //   setFormData(formData.filter((e) => e.id !== id));
    });
  }
  return (
    <>
      <Box
        sx={{ display: "inline-block", mx: "2rem", width: "14rem" }}
      >
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              {fname} {lname}
            </Typography>
            <Typography variant="body2">{cardNo}</Typography>
            <Typography variant="body2">{sex}</Typography>
            <Typography variant="body2">{dob}</Typography>
            <Typography variant="body2">{address}</Typography>
            <Typography variant="body2">{assembly}</Typography>
            <Typography variant="body2">{part}</Typography>
          </CardContent>

          <CardActions>
            <Button size="small"
            onClick={deleteData}
            >
              Delete
            </Button>
            <Button size="small"
            //  onClick={() => updateData(val.id, ind)}
             >
              Update
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default Display;
