import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="float-right ml-auto" style={{width:'847px',height:'455px'}} {...settings}>
      <div>
        <h3><img src="https://source.unsplash.com/random/847x455"/></h3>
      </div>
      <div>
        <h3><img src="https://source.unsplash.com/random/847x455"/></h3>
      </div>
      <div>
        <h3><img src="https://source.unsplash.com/random/847x455"/></h3>
      </div>
      <div>
        <h3><img src="https://source.unsplash.com/random/847x455"/></h3>
      </div>
      <div>
        <h3><img src="https://source.unsplash.com/random/847x455"/></h3>
      </div>
      <div>
        <h3><img src="https://source.unsplash.com/random/847x455"/></h3>
      </div>
    </Slider>
  );
}