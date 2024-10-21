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
  { url: "public/bc.jpg" },
  { url: "public/cambridge.jpg" },
  { url: "public/facra_non_verba.jpg" },
  { url: "public/greater_vancouver.jpg" },
  { url: "public/bc.jpg" },
  { url: "public/cambridge.jpg" },
  { url: "public/facra_non_verba.jpg" },
  { url: "public/greater_vancouver.jpg" },
  { url: "public/bc.jpg" },
  { url: "public/cambridge.jpg" },
  { url: "public/facra_non_verba.jpg" },
  { url: "public/greater_vancouver.jpg" },
];

function CarouselHungerSpots() {
  return (
    <>
    <div className="carousel__container">
      <h2>Hunger Spots</h2>
      <div className="carousel__content">
        <Carousel
          responsive={responsive}
          autoPlay={true}
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
