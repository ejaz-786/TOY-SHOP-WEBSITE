import React, { useContext } from "react";
import "./CSS/Checkout.css";
import { dataContext } from "../App";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const datacon = useContext(dataContext);
  const nav = useNavigate();
  const Home = () => {
    datacon.setShowNav(true);
    datacon.setCartArr([]);
    datacon.setTotal(0);
    nav("/product");
  };
  return (
    <div className="checkoutMainDiv">
      <div className="checkoutimg">
        <img
          style={{ width: "150px" }}
          src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/order-placed-purchased-icon.png"
          alt=""
        />
      </div>
      <h2>
        Congratulations
        <br />
        Your Order is placed...
      </h2>
      <p>
        <button className="goHome" onClick={Home}>
          Continue shopping
        </button>
      </p>
    </div>
  );
};

export default Checkout;
