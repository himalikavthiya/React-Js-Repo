import { useState } from "react";
// import { data } from "./Data";

function Form1() {
  // const [number, setnumber] = useState(0);

  const [value, setvalue] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const submit = (e) => {
      e.preventDefault();
    setSubmittedData(`First Name: ${value.fname}, Last Name: ${value.lname}`);
  };
  const handle = (e) => {
      setvalue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>FirstName</label>
          <input type="text" name="fname" onChange={handle} />
        </div>
        <div className="form-group">
          <label>LastName</label>
          <input type="text" name="lname" onChange={handle} />
        </div>
        
        <button type="submit">Register</button>
      </form>
      <p>{submittedData}</p>
    </>
  );
  }
export default Form1;