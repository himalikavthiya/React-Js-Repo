import React from "react";
import { useSelector } from "react-redux";

const Data = () => {
  const product = useSelector((state) => state.adminReducer);
console.log(product)
  return (
    <div>
      {product.product?.map((val, ind) => {
        return (
          <>
            <h1>{val.title}</h1>
          </>
        );
      })}
    </div>
  );
};

export default Data;
