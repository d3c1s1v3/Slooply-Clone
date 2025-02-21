"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

import { mockSearchData } from "../../constants/mockSearchData";

const BannerSearch = () => {
  const [value, setValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>(["hi"]);

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.toLowerCase());
  };

  return (
    <div className="absolute top-[38%] w-[700px] z-10 bg-[#141822] rounded-full">
      <div className="rounded-full p-2 bg-[#141822] relative">
        <form className="flex bg-[#fff] items-center rounded-full">
          <IoSearchOutline size={30} className="opacity-50 mx-4" />
          <input
            value={value}
            type="text"
            placeholder="Dark trap piano 140 bpm"
            className="py-4 text-lg rounded-full pr-8 outline-none w-full placeholder:text-[#777] placeholder:text-lg selection:bg-[#fccddb]"
            onChange={handleSearch}
          />
        </form>
      </div>

      {searchResults.length > 0 && (
        <div className="h-fit w-[100%] p-2 bg-[#141822] rounded-br-3xl rounded-bl-3xl text-[#fff]">
          {searchResults.map((result) => (
            <div
              key={result}
              className="p-1  border border-borderThin rounded-full my-2 bg-[#22262f]"
            >
              {result}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BannerSearch;
