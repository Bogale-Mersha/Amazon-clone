import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Homall Office Chair High Back Computer Chair Ergonomic Desk Chair"
            price={99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61R8L39ps9L._AC_UL320_.jpg"
          />
          <Product
            id="12321340"
            title="SofaBaton U1 Universal Remote Control with Smart APP"
            price={49}
            rating={3}
            image="https://m.media-amazon.com/images/I/618H04MFraL._AC_SR160,134_QL70_.jpg"
          />
          <Product
            id="49538094"
            title="Echo Show 10 (3rd Gen) | HD smart display with motion and Alexa | Charcoal"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61lclcKxI9L._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="23445930"
            title="LG 70-Inch Class UQ9000 Series Alexa Built-in 4K Smart TV (3840 x 2160), 60Hz Refresh Rate, AI-Powered 4K, Cloud Gaming (70UQ9000PUD, 2022)"
            price={746.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91RGAILCSPL._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="2021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD) - Silver"
            price={2449}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Y30DpqRVL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="4903850"
            title="Where the Crawdads Sing Paperback – March 30, 2021"
            price={9.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81LFAmKY4FL._AC_SY200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
