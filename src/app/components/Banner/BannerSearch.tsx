"use client";

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { IoSearchOutline, IoCloseCircle } from "react-icons/io5";

import { mockSearchData } from "../../constants/mockSearchData";

type Item = {
  id: number;
  label: string;
};

const BannerSearch = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Item[]>([]);

  const showHints = searchResults.length > 0;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    const searchTerm = newValue.trim().toLowerCase();

    const results = searchTerm
      ? mockSearchData
          .filter(({ label }) =>
            label.toLowerCase().includes(newValue.toLowerCase())
          )
          .slice(0, 9)
      : [];

    setSearchResults(results);
  };

  const handleReset = () => {
    setInputValue("");
    setSearchResults([]);
  };

  const bg = !showHints ? "bg-white/20" : "bg-[#141822]";
  const border = !showHints && "rounded-br-[2.5rem] rounded-bl-[2.5rem]";

  return (
    <div className="relative">
      <div
        className={`${bg} ${border} p-2 rounded-tr-[2.5rem] rounded-tl-[2.5rem] transition-all`}
      >
        <form className="flex bg-[#fff] items-center rounded-[2.5rem] overflow-hidden">
          <IoSearchOutline size={30} className="mx-4 text-[#0b0f1977]" />
          <input
            value={inputValue}
            type="text"
            placeholder="Dark trap piano 140 bpm"
            className="py-4 text-lg pr-8 outline-none w-full placeholder:text-[#777] text-[#0b0f19] placeholder:text-lg selection:bg-[#fccddb]"
            onChange={handleSearch}
            onKeyDown={(e) => {
              if (e.key === "Escape") handleReset();
            }}
          />
          {inputValue && (
            <button type="button" onClick={handleReset}>
              <IoCloseCircle size={30} className="mx-4 text-[#0b0f1999]" />
            </button>
          )}
        </form>
      </div>
      {showHints && (
        <div className="bg-[#141822] rounded-br-3xl rounded-bl-3xl absolute w-full flex flex-col p-2">
          {searchResults.map(({ id, label }) => (
            <Link
              href=""
              key={id}
              className="flex justify-start bg-[#22262f] py-2 px-5 mb-1 rounded-[2.5rem] hover:bg-[#ffffff1f] border-[#ffffff0f] border"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BannerSearch;
