import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../App.css";

// import required modules
import { Pagination } from "swiper";

export default function Carousel() {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={require("../../Assets/images/istockphoto-1175355990-612x612.jpg")} alt="" className="h-[70vh] " style={{ height: "70vh" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require("../../Assets/images/istockphoto-1175355990-612x612.jpg")} alt="" className="h-[70vh]" style={{ height: "70vh" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require("../../Assets/images/istockphoto-1175355990-612x612.jpg")} alt="" className="h-[70vh]" style={{ height: "70vh" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require("../../Assets/images/istockphoto-1175355990-612x612.jpg")} alt="" className="h-[70vh]" style={{ height: "70vh" }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require("../../Assets/images/istockphoto-1175355990-612x612.jpg")} alt="" className="h-[70vh]" style={{ height: "70vh" }} />
                </SwiperSlide>

            </Swiper>
        </>
    );
}
