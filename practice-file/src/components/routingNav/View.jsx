import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../routingNav/Items";

function View() {
  const { product } = useParams();
  const result = data.filter((e) => e.productname === product);
  console.log(result);
  return (
    <>
      {/* Product:Start  */}
      <section className="box">
        <div className="content">
          <div className="left">
            <div className="product_img"></div>
            <div className="product_details">
              <h4 className="title">{result[0].productname}</h4>
              <p className="discription">Men's White Printed Sneakers</p>
              <p className="price">
                ₹824 <span className="price_original">₹4000</span>{" "}
                <span className="offer"> 79% OFF</span>
              </p>
              <p className="other">inclusive of all taxes</p>
            </div>
          </div>

          <div className="right">
            <div className="product_description">
              <h4>PRODUCT DESCRIPTION</h4>
              <p>
                Elevate your style with this classNamey pair of Casual Shoes
                from the house of Our brand. Featuring a contemporary refined
                design with exceptional comfort, this pair is perfect to give
                your quintessential dressing an upgrade.
              </p>
              <p>
                <span className="highlight">Country of Origin -</span>
                India
              </p>
              <p>
                <span className="highlight">Manufactured By -</span>
                S.K. INTERNATIONAL AJUDD PURAM BAGDA TAHSIL AGRA U.P.{" "}
                <span className="special">
                  282001, 9759860599, sheela.woakers@gmail.com
                </span>
              </p>
              <p>
                <span className="highlight">Packed By -</span>
                S.K. INTERNATIONAL AJUDD PURAM BAGDA TAHSIL AGRA U.P.{" "}
                <span className="special">
                  282001, 9759860599, sheela.woakers@gmail.com
                </span>
              </p>
              <p>
                <span className="highlight">Commodity -</span> Men's Casual
                Shoes
              </p>
              <p>
                <span className="highlight">Sold By -</span> Next Tree Private
                Limited
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Product:End> */}
    </>
  );
}

export default View;
