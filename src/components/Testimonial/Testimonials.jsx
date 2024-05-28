import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css';

const Testimonials = () => {
  const settings={
    dots:true,
    Infinity:true,
    speed:500,
    slidesToShow:3,
    slidesToScroll:2
  };

  return (
    <div className="w-6/7 m-auto p-5 "> 
      <div className="mt-1">
        <Slider {...settings}>
        {data.map((d) => (
            <div className="bg-gray-600 bg-opacity-20 h-[450px] text-black rounded-xl">
              <div className="h-40 rounded-t-xl flex justify-center items-center">
                <img src={d.img} alt="" className="h-35 w-20 rounded-full"/>
              </div>

              <div className="flex flex-col justify-center items-center gap-4 ">
                <p className="text-xl font-semibold text-white">{d.name}</p>
                <p className="text-center text-white">{d.review}</p>
                <button className="bg-gray-500 text-white text-lg px-6 py-1 rounded-xl ">Read more</button>
              </div>
            </div>

        ))}
        </Slider>
      </div>

    </div>
  );
};

const data = [
  {
    name:'John Morgan',
    img: 'https://www.chesshouse.com/cdn/shop/files/bruce-300.jpg?v=1710975831&width=80',
    review: 'I have made purchases from Chess House for a number of years and have always been satisfied with the products, and especially pleased with the friendly, professional, and helpful advice from the staff',
  },
  {
    name:'John Morgan',
    img: 'https://www.chesshouse.com/cdn/shop/files/amy_eefd114b-28db-4176-8d98-42ab2e4dc035.jpg?v=1710975555&width=112',
    review: 'I have made purchases from Chess House for a number of years and have always been satisfied with the products, and especially pleased with the friendly, professional, and helpful advice from the staff',
  },
  {
    name:'John Morgan',
    img: 'https://www.chesshouse.com/cdn/shop/files/gary.jpg?v=1710976295&width=112',
    review: 'I have made purchases from Chess House for a number of years and have always been satisfied with the products, and especially pleased with the friendly, professional, and helpful advice from the staff',
  },
  {
    name:'John Morgan',
    img: 'https://www.chesshouse.com/cdn/shop/files/steve.jpg?v=1710976587&width=112',
    review: 'I have made purchases from Chess House for a number of years and have always been satisfied with the products, and especially pleased with the friendly, professional, and helpful advice from the staff',
  },
  {
    name:'John Morgan',
    img: 'https://www.chesshouse.com/cdn/shop/files/peter2.jpg?v=1710976763&width=112',
    review: 'I have made purchases from Chess House for a number of years and have always been satisfied with the products, and especially pleased with the friendly, professional, and helpful advice from the staff',
  },
  {
    name:'John Morgan',
    img: 'https://www.chesshouse.com/cdn/shop/files/testimonials-person-avatar-1_75x_90755d3a-cf62-4508-a543-0179edb3cd89.webp?v=1703180098&width=56',
    review: 'I have made purchases from Chess House for a number of years and have always been satisfied with the products, and especially pleased with the friendly, professional, and helpful advice from the staff',
  },

]

export default Testimonials;
