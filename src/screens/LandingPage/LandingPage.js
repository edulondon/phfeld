import React, { useEffect } from "react";
import { useSelector } from "react-redux";
//import { Link } from "react-router-dom";
import Banner from "../../components/Bannar";
// import Products from "../../components/Products";
import Categories from "../../components/Categories"
import "./LandingStyles.css";

function LandingPage({ history }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);
  return (
    <div className="gradient__bg">
      <Banner />
      <Categories />
    </div>
  );
}

export default LandingPage;
