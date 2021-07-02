import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <div className="card__topLine">
        <h1>NEWS UPDATE</h1>
        <p>It is a long established fact that a reader will be distracted</p>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/news-img-1.jpg"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              label="Covid-19"
              path="/news"
            />
            <CardItem
              src="images/news-img-2.jpeg"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              label="Covid-19"
              path="/news"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/news-img-3.jpg"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              label="Covid-19"
              path="/news"
            />
            <CardItem
              src="images/news-img-4.jpeg"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              label="Donation"
              path="/news"
            />
            <CardItem
              src="images/news-img-5.jpeg"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              label="Donation"
              path="/news"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
