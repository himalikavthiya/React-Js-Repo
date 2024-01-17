import React from "react";
import { Container, Form, InputGroup, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { productData } from "./productData";
import { useState } from "react";

const Product = () => {
  const [search, setsearch] = useState("");

  return (
    <Container>
      <h1 className="text-center mt-4">Product List</h1>
      <Form>
        <InputGroup className="mt-4">
          <Form.Control
            onChange={(e) => setsearch(e.target.value)}
            placeholder="search product"
          ></Form.Control>
        </InputGroup>
      </Form>
      <Table striped borderedhover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {productData
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.Product_name.toLowerCase().includes(search);
            })
            .map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.Product_name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.status}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Product;
