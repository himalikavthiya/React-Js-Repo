import React from "react";

function Card({ data }) {
  return (
    <>
      <div class="col-xl-3 col-sm-6 col-12">
        <div className="product-card">
          <div class="badge">Hot</div>
          <div class="product-tumb">
            <img src={data.img} alt=""/>
          </div>
          <div class="product-details">
            <span class="product-catagory">{data.name}</span>
            <h4>
              <a href={data.product_link}>{data.product}</a>
            </h4>
            <p>{data.des}</p>
            <div class="product-bottom-details">
              <div class="product-price">${data.price}</div>
              <div class="product-links">
                <a href="">
                  <i class="fa fa-heart"></i>
                </a>
                <a href="">
                  <i class="fa fa-shopping-cart"></i>
                </a>
              </div>
              </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
