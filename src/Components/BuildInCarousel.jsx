import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function BuildInCarousel(props) {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 540 },
        items: 1,
        slidesToSlide: 1
      },
      mobile: {
        breakpoint: { max: 540, min: 0 },
        items: 1,
        slidesToSlide: 1
      }
    };
  
    return(
      <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={props.autoPlay}
          autoPlaySpeed={5000}
          transitionDuration={500}
          containerClass="carousel-container"
          //removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style d-lg-none"
          itemClass="carousel-item-padding-40-px"
      >
        {props.imgArray.map((image, i) => (
          <div key={i}>
            <img
              className="d-block mx-auto carousel-image"
              src={image}
              alt={`${i} slide`}
            />
          </div>
        ))}
      </Carousel>
    );
  }
  