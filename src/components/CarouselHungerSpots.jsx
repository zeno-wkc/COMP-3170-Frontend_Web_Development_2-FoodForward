import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './CarouselHungerSpots.css';

const responsive = {
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
    slidesToSlide: 2
  }
};

const sliderImageUrl = [
  { url: "./COMP-3170-Frontend_Web_Development_2-FoodForward/bc.jpg" },
  { url: "./COMP-3170-Frontend_Web_Development_2-FoodForward/cambridge.jpg" },
  { url: "./COMP-3170-Frontend_Web_Development_2-FoodForward/facra_non_verba.jpg" },
  { url: "./COMP-3170-Frontend_Web_Development_2-FoodForward/greater_vancouver.jpg" },
  { url: "./COMP-3170-Frontend_Web_Development_2-FoodForward/bc.jpg" },
  { url: "./COMP-3170-Frontend_Web_Development_2-FoodForward/cambridge.jpg" },
  { url: "./COMP-3170-Frontend_Web_Development_2-FoodForward/facra_non_verba.jpg" },
  { url: "./COMP-3170-Frontend_Web_Development_2-FoodForward/greater_vancouver.jpg" },
  { url: "./COMP-3170-Frontend_Web_Development_2-FoodForward/bc.jpg" },
  { url: "./COMP-3170-Frontend_Web_Development_2-FoodForward/cambridge.jpg" },
  { url: "./COMP-3170-Frontend_Web_Development_2-FoodForward/facra_non_verba.jpg" },
  { url: "./COMP-3170-Frontend_Web_Development_2-FoodForward/greater_vancouver.jpg" },
];

function CarouselHungerSpots() {
  return (
    <>
    <div className="carousel__container">
      <h2>Hunger Spots</h2>
      <div className="carousel__content">
        <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
        >
          {sliderImageUrl.map((imageUrl, index) => {
            return (
              <div className="slider" key={index}>
                <img src={imageUrl.url} alt={`Hunger spot image ${index + 1}`} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
    </>
  );
}

export default CarouselHungerSpots;
