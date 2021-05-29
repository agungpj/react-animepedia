import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='./images/slider-anime-1.jpg' />
      </Wrap>
      <Wrap>
        <img src='./images/slider-anime-2.jpg' />
      </Wrap>
      <Wrap>
        <img src='./images/slider-anime-3.jpg' />
      </Wrap>
      <Wrap>
        <img src='./images/slider-anime-4.png' />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
  overflow: hidden;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    /* overflow: visible; */
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%; /* width of container */
    height: 500px; /* height of container */
    object-fit: cover;

    transition-duration: 300ms;

    &:hover {
      border: 5px solid rgba(255, 255, 255, 0.8);
    }
  }
`;
