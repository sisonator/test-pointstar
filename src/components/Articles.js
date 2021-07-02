import React from "react";
import "./Articles.css";
import CardItem from "./CardItem";

function Articles() {
  return (
    <div className="cards">
      <div className="articles__topLine">
        <h1>NEWS UPDATE</h1>
        <p>It is a long established fact that a reader will be distracted</p>
      </div>
      <div className="article__cards-container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/news-img-1.jpg"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus purus, interdum hendrerit orci non, fermentum tincidunt lacus. Nullam consectetur ligula nec diam auctor, eu ultrices sem scelerisque. Nunc accumsan pharetra nibh, eget sollicitudin quam scelerisque vel. Nullam pharetra finibus finibus. Etiam bibendum enim a tortor gravida, sed moles..."
              label="Covid-19"
              path="/news"
            />
            <CardItem
              src="images/news-img-2.jpeg"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus purus, interdum hendrerit orci non, fermentum tincidunt lacus. Nullam consectetur ligula nec diam auctor, eu ultrices sem scelerisque. Nunc accumsan pharetra nibh, eget sollicitudin quam scelerisque vel. Nullam pharetra finibus finibus. Etiam bibendum enim a tortor gravida, sed moles..."
              label="Covid-19"
              path="/news"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/news-img-3.jpg"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus purus, interdum hendrerit orci non, fermentum tincidunt lacus. Nullam consectetur ligula nec diam auctor, eu ultrices sem scelerisque. Nunc accumsan pharetra nibh, eget sollicitudin quam scelerisque vel. Nullam pharetra finibus finibus. Etiam bibendum enim a tortor gravida, sed moles..."
              label="Covid-19"
              path="/news"
            />
            <CardItem
              src="images/news-img-4.jpeg"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus purus, interdum hendrerit orci non, fermentum tincidunt lacus. Nullam consectetur ligula nec diam auctor, eu ultrices sem scelerisque. Nunc accumsan pharetra nibh, eget sollicitudin quam scelerisque vel. Nullam pharetra finibus finibus. Etiam bibendum enim a tortor gravida, sed moles..."
              label="Donation"
              path="/news"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/news-img-5.jpeg"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus purus, interdum hendrerit orci non, fermentum tincidunt lacus. Nullam consectetur ligula nec diam auctor, eu ultrices sem scelerisque. Nunc accumsan pharetra nibh, eget sollicitudin quam scelerisque vel. Nullam pharetra finibus finibus. Etiam bibendum enim a tortor gravida, sed moles..."
              label="Donation"
              path="/news"
            />
            <CardItem
              src="images/news-img-2.jpeg"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus purus, interdum hendrerit orci non, fermentum tincidunt lacus. Nullam consectetur ligula nec diam auctor, eu ultrices sem scelerisque. Nunc accumsan pharetra nibh, eget sollicitudin quam scelerisque vel. Nullam pharetra finibus finibus. Etiam bibendum enim a tortor gravida, sed moles..."
              label="Covid-19"
              path="/news"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Articles;
