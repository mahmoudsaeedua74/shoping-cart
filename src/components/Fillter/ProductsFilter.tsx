"use client";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from "react-router-dom";
import Color from "../../ui/color/Color";
import Button from "../Button/Button";
const categories = [
  {id:1,title:"all"},
  {id:2,title:"cloths"},
  {id:3,title:"shoes"},
  {id:4,title:"watches"},
  {id:5,title:"jewelry"},
];
export default function ProductsFilter() {
  // Update priceMin and priceMax
  return (
    <div className="flex flex-col gap-y-4 text-sm  md:mb-20">
    <div className="bg-[#F6F7F8] rounded py-4 px-5 font-semibold">
      <h3 className="text-[18px] mb-4 text-textColor" id="accessories-label">
        category
      </h3>
      <ul
        className="space-y-4 text-textColor cursor-pointer"
        role="list"
        aria-labelledby="accessories-label"
      >
        {categories.map((item) => (
          <li key={item.id} role="listitem">
            <Link
              to={`/`}
              className={`flex justify-between`}
            >
              <span>{item.title}</span>
              <span className="opacity-35"><i className="fa-solid fa-arrow-right"></i></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-[#F6F7F8] rounded py-4 px-5 font-semibold">
      <h3 className="text-[18px] text-textColor uppercase" id="price-label">
        Price
      </h3>
      <div aria-labelledby="price-label">
        <label
          htmlFor="price"
          className="flex justify-between mb-4"
          id="price-range-description"
        >
          <span>Range:</span>
          <span>
            ${[0]} - ${[20]}
          </span>
        </label>
        <div className="flex">
          <RangeSlider
            min={0}
            max={100}
            step={5}
            aria-labelledby="price-range-description"
          />
        </div>
      </div>
    </div>
    <div className="bg-[#F6F7F8] rounded py-4 px-5 font-semibold">
      <h3 className="text-[18px] mb-4 text-textColor uppercase" id="color-label">
        Color
      </h3>
      <div aria-labelledby="color-label">
        <Color />
      </div>
    </div>
    <div className="bg-[#F6F7F8] rounded py-4 px-5 font-semibold">
      <h3 className="text-[18px] mb-4 text-textColor uppercase" id="brand-label">
        Brand
      </h3>
      <ul
        className="space-y-4 text-textColor"
        role="list"
        aria-labelledby="brand-label"
      >
        <li className="flex justify-between" role="listitem">
          <span>Apple</span>
          <span className="opacity-35">1</span>
        </li>
        <li className="flex justify-between text-mainColor" role="listitem">
          <span>LG</span>
          <span className="opacity-35">1</span>
        </li>
        <li className="flex justify-between" role="listitem">
          <span>Samsung</span>
          <span className="opacity-35">1</span>
        </li>
        <li className="flex justify-between" role="listitem">
          <span>Siemens</span>
          <span className="opacity-35">1</span>
        </li>
      </ul>
    </div>
    <Button  className="cursor-pointer" aria-label="Show more options">
      More
    </Button>
  </div>
  
  );
}

