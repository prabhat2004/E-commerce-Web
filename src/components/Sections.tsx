import React from 'react'
import Carousel from './Home/Carousel';

interface SectionProps {
    title: string;
    data?: any;
}
const Sections = ({ title, data }: SectionProps) => {
    return (
        <section className="trends-section mt-8">
            <div className="m-3">
                <h1 className="font-bold text-4xl ">{title}</h1>
                <h4 className="subhead font-normal text-sm">
                    Lorem, ipsum dolor sit amet consectetur
                </h4>
                <div className="carousel-container">
                    <Carousel data={data} />
                </div>
            </div>
        </section>
    )
}

export default Sections