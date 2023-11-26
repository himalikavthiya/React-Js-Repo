import React, { useState } from "react";
import { bookObject } from "./Object";
import { useEffect } from "react";

const Details = () => {
  const [result, setresult] = useState([]);
  const [val, setval] = useState({});

  /**EVENT CHANGE FUNCTION */
  const handle = (e) => {
    setval({ ...val, [e.target.name]: e.target.value });
  };

  /**BUTTON CLICK FUNCTION */
  const handlesubmit = () => {
    setresult([...result, val]);
  };

  /**NAME THROUGTH DATA DELETE */
  const handleDelete = (name) => {
    setresult(result.filter((e) => e.author !== name));
  };

  /** USE HOOK SET DATA  */
  useEffect(() => {
    setresult(bookObject);
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          name="author"
          onChange={handle}
          placeholder="Enter book author"
        />
        <input
          type="text"
          name="title"
          onChange={handle}
          placeholder="Enter book title"
        />
        <input
          type="text"
          name="des"
          onChange={handle}
          placeholder="Enter book description"
        />
        <button onClick={handlesubmit}>Add Data</button>
      </div>

      /**MAPING DATA */
      {result?.map((val, ind) => {
        return (
          <div className="card" style={{ width: 250 }} key={ind}>
            <div className="card-body">
              <h5 className="card-title">{val.title}</h5>
              <p className="card-text">{val.desc}</p>
              <p className="card-text">{val.author}</p>
            </div>
            <button
              onClick={() => handleDelete(val.author)}
              style={{ width: "50%", alignSelf: "center" }}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Details;
