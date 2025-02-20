"use client";

import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

import { mockSearchData } from "../constants/mockSearchData";

const BannerSearch = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div
      className={`border-[8px] border-white/10 ${
        value.length === 0 ? "rounded-full" : "rounded-3xl"
      } w-full overflow-hidden`}
    >
      <form
        className="flex bg-[#fff] items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearchOutline size={30} className="opacity-50 mx-4" />
        <input
          value={value}
          type="text"
          placeholder="Dark trap piano 140 bpm"
          className="py-4 text-lg pr-8 outline-none w-full placeholder:text-[#777] placeholder:text-lg selection:bg-[#fccddb]"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      {value.length !== 0 &&
        mockSearchData.map((item) => {
          if (item.label.toLowerCase().includes(value.toLowerCase())) {
            console.log(item.label);
            return (
              <div key={item.id} className="text-white">
                {item.label}
              </div>
            );
          } else {
            return null;
          }
        })}
    </div>
  );
};

export default BannerSearch;
