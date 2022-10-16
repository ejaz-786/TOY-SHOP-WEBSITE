import React, { useContext, useEffect } from "react";
import "./CSS/Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import Toy from "../DataFile/Toy";
import cate from "../DataFile/category";
import age from "../DataFile/Age";
import Footer from "./Footer";
import { dataContext } from "../App";

const Home = () => {
  const search = useContext(dataContext);
  const nav = useNavigate();
  const settings = {
    infinite: true,
    dots: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const settings2 = {
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          centerMode: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          centerMode: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          centerMode: true,
          autoplaySpeed: 2000,
        }
      },
    ],
  };

  const srchcate = (e) => {
    let txt = e.target.id.toLowerCase();
    let arr = [];
    Toy.forEach((val) => {
      if (val.category.toLowerCase() === txt) {
        arr.push(val);
      }
    });
    search.setProArr(arr);
    nav("/product");
  };

  const searchAge = (e) =>{
    let arr = [];
    Toy.forEach((obj)=>{
      if(obj.age === e){
        arr.push(obj);
      }
    });
    search.setProArr(arr);
    nav('/product');
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home_div1">
        <Slider {...settings}>
          <div className="slide1">
            <div className="slide2btn_div">
              <Link to="/product">
                <button className="slide2btn">Shop Now</button>
              </Link>
            </div>
          </div>
          <div className="slide2"></div>
        </Slider>
      </div>
      <div>
        <h3 className="catehead">Categories</h3>
        <div className="home_div2">
          {cate.map((val) => {
            return (
              <>
                <div onClick={srchcate} id={val.name} className="cards">
                  <div className="imgcat">
                    <img
                      onClick={srchcate}
                      id={val.name}
                      className="cate_img"
                      src={val.image}
                      alt=""
                    />
                  </div>
                  <h2 onClick={srchcate} id={val.name} className="headcat">
                    {val.name}
                  </h2>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="home_div3">
        <h3 className="catehead2" style={{paddingTop: '10px'}}>Shop By Age</h3>
        <Slider {...settings2}>
          {age.map((val) => {
            return (
              <div className="ageSlideImg" >
                <img onClick={()=>{searchAge(val.age)}} style={{ width: "80%",cursor:'pointer', paddingBottom: '10px' }} src={val.image} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
      <div id="about">
        <div className="home_div4">
          <div className="about_content_div">
            <h3 className="abthead">About Us</h3>
            <p className="abtcon">
              We, KIDS ZONE, situated at Gomti Nagar, Lucknow, offer the largest
              range of toys, outdoor games cum toys that we sell at extremely
              affordable prices. We are the ideal place to source the perfect
              game or toy for your child. If you are looking for toys for your
              baby boy or baby girl, we have huge range of offerings including
              indoor as well outdoor toys that keeps your child engaged
              throughout. Visit our entire website to view our vast range of
              toys that you can easily take your pick from and let your child
              have an enjoyable time.
            </p>
          </div>
          <div className="abtImg">
            <img
              style={{ width: "100%" }}
              src="https://image3.jdomni.in/banner/29052020/79/00/D0/7CE4468794CD417752F03192C0_1590758589833.jpg?output-format=webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
