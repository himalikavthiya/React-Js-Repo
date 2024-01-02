import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_PRODUCT_PANDING,
  POST_PRODUCT_PANDING,
  PUT_PRODUCT_PANDING,
} from "../redux_saga/admin/action/action";
import { useState } from "react";

const Data = () => {
  const product = useSelector((state) => state.adminReducer);
  const title = useRef();
  const author = useRef();
  const [view, setview] = useState({});
  const dispatch = useDispatch();

  const handlesubmit = async () => {
    const data = {
      title: title.current.value,
      author: author.current.value,
    };
    dispatch({ type: POST_PRODUCT_PANDING, dataObject: data });
  };

  const handleDelete = async (val) => {
    dispatch({ type: DELETE_PRODUCT_PANDING, dataObject: val });
    console.log(val);
  };

  const handalchange = (e) => {
    setview ({
      ...view,
      [e.target.name]: e.target.value,
    })
  };

  const handalUpdate = () => {
    dispatch({ type: PUT_PRODUCT_PANDING, dataObject: view });
  };


  return (
    <React.Fragment>
      <div>
        <input type="text" name="title" ref={title} />
        <input type="text" name="author" ref={author} />
        <button type="submit" onClick={handlesubmit}>
          submit
        </button>
      </div>

      <input
        type="text"
        name="title"
        value={view.title}
        onChange={handalchange}
      ></input>
      <input
        type="text"
        name="author"
        value={view.author}
        onChange={handalchange}
      ></input>
            <button onClick={handalUpdate}>Update</button>

      {product.product?.map((val, ind) => {
        return (
          <>
            <p>{val?.title}</p>
            <p>{val?.author}</p>
            <button onClick={() => handleDelete(val)}>Delete</button>
            <button onClick={() => setview(val)}>view</button>
          </>
        );
      })}
    </React.Fragment>
  );
};

export default Data;
