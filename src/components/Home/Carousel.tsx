import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
interface CarouselProps {
    data?: any;
}
export default function Carousel({ data }: CarouselProps) {
    // console.log(data);
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                // centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                width={1200}
                height={1200}
                className="mySwiper"
            >
                {data?.map((element: any, index: number) => {
                    console.log(element);

                    return (
                        <SwiperSlide>
                            <div className="swiper-child w-[400px] bg-[#D9D9D9] m-3 " key={index + 1}>
                                <img src={element?.src} alt="sfs" width={"400px"} height={"440px"} />
                                <div className="flex justify-between p-2">
                                    <h3>Classic </h3>
                                    <p>4 star</p>
                                </div>
                                <div className="flex justify-between p-2">
                                    <h2>$ 200</h2>
                                    add
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    );
}
