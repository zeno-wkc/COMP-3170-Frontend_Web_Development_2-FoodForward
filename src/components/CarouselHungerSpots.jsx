import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarouselHungerSpots.css';
import { Link } from "react-router-dom";

const sliderImageUrl = [
  { url: "./bc.jpg", WEBSITE_URL: "https://www.foodbanksbc.com/" },
  { url: "./cambridge.jpg", WEBSITE_URL: "https://cambridgefoodbank.org/" },
  { url: "./facra_non_verba.jpg", WEBSITE_URL: "https://www.vsb.bc.ca/windermere" },
  { url: "./greater_vancouver.jpg", WEBSITE_URL: "https://foodbank.bc.ca/?form=joy" },
  { url: "./food_banks.png", WEBSITE_URL: "https://foodbankscanada.ca/" },
  { url: "./food_runners.png", WEBSITE_URL: "https://www.vancouverfoodrunners.com/" },
  { url: "./food_stash.png", WEBSITE_URL: "https://www.foodstash.ca/" },
  { url: "./vancouver_school_board.jpg", WEBSITE_URL: "https://www.vsb.bc.ca/"},
  { url: "./zero_food_waste.png", WEBSITE_URL: "https://www.zerofoodwaste.ca/" },
];

function CarouselHungerSpots() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1496, settings: { slidesToShow: 10, slidesToScroll: 10 }},
      { breakpoint: 1024, settings: { slidesToShow: 8, slidesToScroll: 8 }},
      { breakpoint: 768, settings: { slidesToShow: 5, slidesToScroll: 5 }},
      { breakpoint: 480, settings: { slidesToShow: 4, slidesToScroll: 4 }},
    ],
  };

  return (
    <div className="slider-container">
      <h2>Hunger Spots</h2>
      <Slider {...settings}>
        { sliderImageUrl.map((image, index) => {
            return (
              <div className='slider-img__container' key={index}>
                <Link to={image.WEBSITE_URL} target="_blank" rel="noopener noreferrer"><img src={image.url} alt={`slider-img-${index}`} /></Link>
              </div>
            );
          })
        }
      </Slider>
    </div>
  );
}

export default CarouselHungerSpots;
