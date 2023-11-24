import React, { useEffect, useState } from "react";
import { data } from "../routingNav/Items";
import { Link } from "react-router-dom";

function Home() {
  //   console.log(data);
  const [value, setvalue] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  const handle = (e) => {
    if (e.target.name === "img") {
      const reader = new FileReader();
      reader.onload = () => {
        setvalue({ ...value, [e.target.name]: reader.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setvalue({ ...value, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    setSubmittedData([...submittedData, value]);
    console.log(submittedData);
  };

  const handleDelete = (name) => {
    console.log(name);
    setSubmittedData(submittedData.filter((e) => e.productname !== name));
  }; //delete button

  useEffect(() => {
    setSubmittedData(data);
    
  }, []);

  return (
    <>
      <div>
        <h1>Add Product Card</h1>
        <label>ID</label>
        <input type="text" name="id" onChange={handle} />
        <label htmlFor="myfile">Select a file:</label>
        <input type="file" name="img" onChange={handle} />
        <label>ProductName</label>
        <input type="text" name="productname" onChange={handle} />
        <label>ProductDes</label>
        <input type="text" name="des" onChange={handle} />
        <label>Product</label>
        <input type="text" name="product" onChange={handle} />
        <label>ProductPrice</label>
        <input type="number" name="price" onChange={handle} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {submittedData?.map((val, ind) => (
        <div className="product" key={ind}>
          <div className="img-container">
            <img src={val.img} alt="" />
          </div>
          <div className="product-info">
            <div className="product-content">
              <h1>{val.productname}</h1>
              <p>{val.des}</p>
              <span>{val.product}</span>
              <div className="buttons">
                <Link to={`/${val.productname}`} className="button buy">
                  View
                </Link>
                <button
                  className="button add"
                  onClick={() => {
                    handleDelete(val.productname);
                  }}
                >
                  Delete
                </button>
                <span className="button" id="price">
                  {val.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Home;
