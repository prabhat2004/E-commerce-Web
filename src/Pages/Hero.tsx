import React from 'react';
import Sections from '../components/Sections';
import { useNavigate } from "react-router-dom"

export default function Hero() {
  const mensTrends = [
    { src: require("../Assets/images//urban-men.jpg"),
    id: 1 },
    {
      src: require("../Assets/images//urban-men.jpg"),
      id: 2
    },
    {
      src: require("../Assets/images//urban-men.jpg"),
      id: 3
    },
    {
      src: require("../Assets/images//urban-men.jpg"),
      id: 4
    },
    {
      src: require("../Assets/images//urban-men.jpg"),
      id: 5
    },
    
  ]
  const navigate = useNavigate();
  return (
    <>
      <div className="main-parent grid md:grid-cols-2 gap-3">
        <div className="first-child ">
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img className="w-full relative h-[550px] object-cover brightness-[0.5]" src={require("../Assets/images/shopping-women.jpg")} alt="Flower and sky" />
            <div className="absolute bottom-[150px] left-0 px-6 py-4">
              <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Shop Women's Trend</h4>
              <p className="leading-normal text-gray-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  Beatae, vitae <br /> ullam quam voluptas quae ab error quos

              </p>
              <button className="shop-btns p-3 border-2 text-white font-semibold mt-3 hover:bg-white hover:text-black" onClick={() => {
                navigate('/products?womens')
              }}>Purchase Now</button>
            </div>
    
          </div>

        </div>
        <div className="second-parent grid sm:grid-cols-2 gap-3">
          <div className="">
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img className="relative w-full h-[270px] object-cover brightness-[0.5]" src={require("../Assets/images/women-1.jpg")} alt="Flower and sky" />

              <div className="absolute bottom-0 left-0 px-6 py-4">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Try Tough Urban</h4>
                <p className="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. P</p>
                <button className="shop-btns p-3 border-2 text-white font-semibold mt-3 hover:bg-white hover:text-black" onClick={() => {
                  navigate('/products?urban')
                }}>Purchase Now</button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img className="relative w-full h-[270px] object-cover brightness-[0.5]" src={require("../Assets/images/cloths-men.jpg")} alt="Flower and sky" />

              <div className="absolute bottom-0 left-0 px-6 py-4">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Professional Men</h4>
                <p className="leading-normal text-gray-100">Lorem ipsum dolor, siud.</p>
                <button className="shop-btns p-3 border-2 text-white font-semibold mt-3 hover:bg-white hover:text-black" onClick={() => {
                  navigate('/products?mensTrends')
                }}>Purchase Now</button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img className="relative w-full h-[270px] object-cover brightness-[0.5]" src={require("../Assets/images/urban-men.jpg")} alt="Flower and sky" />

              <div className="absolute bottom-0 left-0 px-6 py-4">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Boys Trend</h4>
                <p className="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur a.</p>
                <button className="shop-btns p-3 border-2 text-white font-semibold mt-3 hover:bg-white hover:text-black" onClick={() => {
                  navigate('/products?boys')
                }}>Purchase Now</button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img className="relative w-full h-[270px] object-cover brightness-[0.5]" src={require("../Assets/images/shopping-bag.jpg")} alt="Flower and sky" />

              <div className="absolute bottom-0 left-0 px-6 py-4">
                <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Big Brands Products</h4>
                <p className="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur</p>
                <button className="shop-btns p-3 border-2 text-white font-semibold mt-3 hover:bg-white hover:text-black" onClick={() => {
                  navigate('/products?brand')
                }}>Purchase Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sections title="Men's Trending" data={mensTrends} />
      <Sections title="Womens's Trending" data={mensTrends} />
      <Sections title="Kid's Trending" data={mensTrends} />
    </>
  )
}
