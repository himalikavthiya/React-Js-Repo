// import {
//   Box,
//   TextField,
//   Button,
//   CardContent,
//   Typography,
//   CardActions,
//   Card,
// } from "@mui/material";
// import axios from "axios";
// import React, { useRef, useState } from "react";
// import { useEffect } from "react";
// import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.css";
// import Form from "./Form";
// // import Swal from 'sweetalert2/dist/sweetalert2.js'

// const Home = () => {
//   /**data storage in state */
//   const [data, setdata] = useState([]);
//   const [update, setupdate] = useState({});

//   /* ---------------------------- Get APi data ---------------------------- */
//   const getData = () => {
//     axios.get("http://localhost:3000/posts").then((res) => {
//       console.log(res.data);
//       setdata(res.data || []);
//     });
//   };
 
//   /* ----------------------- Add input  ----------------------- */
//   const addData = () => {
//      // const result = {
//     //   fname: title.current.value,
//     //   author: author.current.value,
//     // };
//     // axios.post("http://localhost:3000/posts", result).then((res) => {
//     //   console.log(res.data);
//     //   setdata([...data, res.data]);
//     // });
//     //   sweetAlt.fire({
//     //     title: "Added..!",
//     //     text: `${result.title} has been added to the list!`,
//     //     icon: "success",
//     //   });
//     // title.current.value = "";
//     // author.current.value = "";
//   };

//   /* ------------------------------- Delete data ------------------------------ */
//   // const deleteData = (id) => {
//   //   console.log(id);

//   //   axios.delete(`http://localhost:3000/posts/${id}`).then(() => {
//   //     //   getData();
//   //     setdata(data.filter((e) => e.id !== id));
//   //   });

//   //   /* ----------------------- sweet alert for delete data ---------------------- */
//   //   const swalWithBootstrapButtons = Swal.mixin({
//   //     customClass: {
//   //       confirmButton: "btn btn-success",
//   //       cancelButton: "btn btn-danger",
//   //     },
//   //     buttonsStyling: false,
//   //   });
//   //   swalWithBootstrapButtons
//   //     .fire({
//   //       title: "Are you sure?",
//   //       text: "You won't be able to revert this!",
//   //       icon: "warning",
//   //       showCancelButton: true,
//   //       confirmButtonText: "Yes, delete it!",
//   //       cancelButtonText: "No, cancel!",
//   //       reverseButtons: true,
//   //     })
//   //     .then((result) => {
//   //       if (result.isConfirmed) {
//   //         swalWithBootstrapButtons.fire({
//   //           title: "Deleted!",
//   //           text: "Your file has been deleted.",
//   //           icon: "success",
//   //         });
//   //       } else if (
//   //         /* Read more about handling dismissals below */
//   //         result.dismiss === Swal.DismissReason.cancel
//   //       ) {
//   //         swalWithBootstrapButtons.fire({
//   //           title: "Cancelled",
//   //           text: "Your imaginary file is safe :)",
//   //           icon: "error",
//   //         });
//   //       }
//   //     });
//   // };

//   /* ------------------------------- update data ------------------------------ */
//   // const updateData = (id, ind) => {
//   //   const final = data[ind];
//   //   setupdate(final);
//   // };

//   // const final = () => {
//   //     axios
//   //     .put(`http://localhost:3000/posts/${update.id}`, update)
//   //     .then((res) => {
//   //       getData();
//   //     });
//   // };

//   // const finalUpdate = (e) => {
//   //   setupdate({ ...update, [e.target.name]: e.target.value });
//   // };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <>
//       {/* <Box m="1.5rem 2.5rem">
//         <Box
//           p="1rem"
//           border=".2rem solid"
//           borderRadius=".5rem"
//           m="2rem"
//           width="17rem"
//         >
//           <TextField
//             id="outlined-basic"
//             label="Title"
//             variant="outlined"
//             inputRef={title}
//             sx={{ marginBottom: 1, paddingRight: 1 }}
//           />
//           <TextField
//             id="outlined-basic"
//             label="Author"
//             variant="outlined"
//             inputRef={author}
//           />
//           <Box>
//             <Button
//               sx={{ marginTop: 1 }}
//               variant="contained"
//               color="success"
//               onClick={addData}
//             >
//               Add Data
//             </Button>
//           </Box>

//           {/* <input
//             type="text"
//             name="title"
//             value={update.title}
//             onChange={finalUpdate}
//           />
//           <input
//             type="text"
//             name="author"
//             value={update.author}
//             onChange={finalUpdate}
//           /> */}
//           {/* <button onClick={final}>update</button>
//           <button>cancel</button> */}
//         {/* </Box> */}

//         {data?.map((val, ind) => {
//           return (
//             <Box
//               key={ind}
//               sx={{ display: "inline-block", mx: "2rem", width: "14rem" }}
//             >
//               <Card variant="outlined">
//                 <CardContent>
//                   <Typography
//                     sx={{ fontSize: 18 }}
//                     color="text.secondary"
//                     gutterBottom
//                   >
//                     {val.title}
//                   </Typography>

//                   <Typography variant="body2">{val.author}</Typography>
//                 </CardContent>

//                 <CardActions>
//                   <Button size="small" onClick={() => deleteData(val.id)}>
//                     Delete
//                   </Button>
//                   <Button size="small" onClick={() => updateData(val.id, ind)}>
//                     Update
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Box>
//           );
//         })}
//       {/* </Box>  */}
//     </>
//   );
// };

// export default Home;
