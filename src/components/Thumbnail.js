import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { IconContext } from "react-icons/lib";
import "./Thumbnail.css";

function Thumbnail() {
  return (
    <IconContext.Provider value={{ color: "fff", size: 64 }}>
      <div className="thumbnail__section">
        <div className="thumbnail__wrapper">
          <h1 className="thumbnail__heading">Choose Your Vaccine</h1>
          <p className="thumbnail__text">
            It is a long established fact that a reader will be distracted
          </p>
          <div className="thumbnail__container">
            <Link to="/" className="thumbnail__container-card">
              <div className="thumbnail__container-cardInfo">
                <div className="icon">
                  <img src="/images/CHN.png" alt="china flag" />
                </div>
                <h3>AstraZenneca</h3>
                <h4>18 - 64 years old</h4>
                <ul className="thumbnail__container-features">
                  <li>Doses x2</li>
                  <li>28 days apart</li>
                  <li>Adenoviral Vector</li>
                  <li>Effectiveness 70,4% - 82,4%</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Choose Vaccine
                </Button>
              </div>
            </Link>
            <Link to="/" className="thumbnail__container-card">
              <div className="thumbnail__container-cardInfo">
                <div className="icon">
                  <img src="/images/UK.png" alt="UK flag" />
                </div>
                <h3>Sinovac</h3>
                <h4>18 - 60 years old</h4>
                <ul className="thumbnail__container-features">
                  <li>Doses x2</li>
                  <li>14 days apart</li>
                  <li>Inactivated Virus</li>
                  <li>Effectiveness 49,6% - 50,7%</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Choose Vaccine
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Thumbnail;
