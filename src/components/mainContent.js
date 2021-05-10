import React from "react";
import prodata from "../pages/Products/Prodata";
import "./mainContent.scss";
import "../pages/Products/product-item.css";

const MainContent = () => {
  console.log(prodata);
  const listItems = prodata.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.currency}
          {item.price}
        </p>
        <div className="btn">Add to cart</div>
      </div>
    </div>
  ));
  return <div className="main_content">{listItems}</div>;
};
export default MainContent;
